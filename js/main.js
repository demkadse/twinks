(function () {
  function createParagraphs(paragraphs) {
    return paragraphs.map(function (text) {
      return "<p>" + text + "</p>";
    }).join("");
  }

  function findCharacterById(id) {
    return TWINKS_SITE.characters.find(function (character) {
      return character.id === id;
    }) || TWINKS_SITE.characters[0];
  }

  function populateSelectionPage() {
    const grid = document.getElementById("character-grid");

    if (!grid) {
      return;
    }

    grid.innerHTML = "";

    TWINKS_SITE.characters.forEach(function (character) {
      const link = document.createElement("a");
      const content = document.createElement("div");
      const status = document.createElement("p");
      const title = document.createElement("h2");

      link.className = "selection-card";
      link.href = "character.html?character=" + character.id;
      link.style.backgroundImage = (character.selectionImage || character.portrait) + ", " + character.theme;
      link.style.backgroundSize = "cover, cover";
      link.style.backgroundPosition = "center, center";

      content.className = "card-content";
      status.className = "selection-status eyebrow";
      status.textContent = character.status || "";
      title.textContent = character.name;

      if (character.status) {
        content.appendChild(status);
      }
      content.appendChild(title);
      link.appendChild(content);
      grid.appendChild(link);
    });
  }

  function populateModalCopy() {
    const privacy = document.getElementById("privacy-copy");
    const copyright = document.getElementById("copyright-copy");

    if (privacy) {
      privacy.innerHTML = createParagraphs(TWINKS_SITE.privacy);
    }

    if (copyright) {
      copyright.innerHTML = createParagraphs(TWINKS_SITE.copyright);
    }
  }

  function setupModals() {
    document.querySelectorAll("[data-open-modal]").forEach(function (button) {
      button.addEventListener("click", function () {
        const target = document.getElementById(button.getAttribute("data-open-modal"));

        if (!target) {
          return;
        }

        target.classList.add("is-open");
        target.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
      });
    });

    document.querySelectorAll(".modal").forEach(function (modal) {
      modal.addEventListener("click", function (event) {
        if (event.target === modal) {
          closeModal(modal);
        }
      });
    });

    document.querySelectorAll("[data-close-modal]").forEach(function (button) {
      button.addEventListener("click", function () {
        const modal = button.closest(".modal");
        closeModal(modal);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape") {
        return;
      }

      document.querySelectorAll(".modal.is-open").forEach(function (modal) {
        closeModal(modal);
      });
    });
  }

  function closeModal(modal) {
    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function populateCharacterPage() {
    const stage = document.getElementById("character-stage");

    if (!stage) {
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const character = findCharacterById(params.get("character"));
    const portraitLayer = document.getElementById("portrait-layer");
    const ambientLayer = document.getElementById("ambient-layer");
    const name = document.getElementById("character-name");
    const role = document.getElementById("character-role");
    const hook = document.getElementById("character-hook");
    const nav = document.getElementById("tab-nav");
    const tabKicker = document.getElementById("tab-kicker");
    const tabTitle = document.getElementById("tab-title");
    const tabBody = document.getElementById("tab-body");
    const audio = document.getElementById("character-audio");
    const trackName = document.getElementById("track-name");

    document.title = "Twinks | " + character.name;
    name.textContent = character.name;
    role.textContent = character.role;
    hook.textContent = character.hook;
    portraitLayer.style.backgroundImage = character.portrait;
    trackName.textContent = character.audio.label;

    if (audio) {
      audio.src = character.audio.src;
    }

    nav.innerHTML = character.tabs.map(function (tab, index) {
      const activeClass = index === 0 ? " is-active" : "";
      return `<button type="button" class="tab-button${activeClass}" data-tab-id="${tab.id}">${tab.label}</button>`;
    }).join("");

    function activateTab(tabId) {
      const currentTab = character.tabs.find(function (tab) {
        return tab.id === tabId;
      }) || character.tabs[0];

      ambientLayer.style.backgroundImage = currentTab.background;
      tabKicker.textContent = currentTab.kicker;
      tabTitle.textContent = currentTab.title;
      tabBody.innerHTML = createParagraphs(currentTab.paragraphs);

      nav.querySelectorAll(".tab-button").forEach(function (button) {
        button.classList.toggle("is-active", button.getAttribute("data-tab-id") === currentTab.id);
      });
    }

    nav.addEventListener("click", function (event) {
      const button = event.target.closest(".tab-button");

      if (!button) {
        return;
      }

      activateTab(button.getAttribute("data-tab-id"));
    });

    activateTab(character.tabs[0].id);
  }

  populateSelectionPage();
  populateModalCopy();
  setupModals();
  populateCharacterPage();
})();
