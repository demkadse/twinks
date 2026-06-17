const TWINKS_SITE = {
  privacy: [
    "Diese Beispielseite speichert standardmaessig keine Formulardaten und nutzt kein Tracking. Wenn du spaeter externe Fonts, eingebettete Musikquellen oder Analyse-Tools ergaenzen willst, muss die Datenschutzerklaerung entsprechend erweitert werden.",
    "Auf GitHub Pages werden Zugriffsdaten technisch ueber GitHub verarbeitet. Wenn du eigene Audio- oder Bilddateien einbindest, sollten Quelle, Rechte und eventuelle Drittanbieter transparent genannt werden.",
    "Empfehlung fuer die finale Version: eigenes Impressum ergaenzen, genutzte Medienquellen dokumentieren und nur Medien einbinden, fuer die du Veroeffentlichungsrechte hast."
  ],
  copyright: [
    "Alle Texte, Charakterbeschreibungen, Grafiken, Musikdateien und Layoutbestandteile sollten nur verwendet werden, wenn du die Nutzungsrechte dafuer besitzt oder sie selbst erstellt hast.",
    "Fremde Illustrationen, Screenshots, Musikstuecke oder Logos duerfen nicht ohne passende Lizenz veroeffentlicht werden. Das gilt auch dann, wenn die Seite nicht kommerziell genutzt wird.",
    "Fuer die finale Fassung solltest du pro Medium Quelle, Urheber und Lizenz sauber festhalten. Dann kann diese Sektion exakt auf deine Inhalte angepasst werden."
  ],
  characters: [
    {
      id: "viktoria",
      name: "Viktoria",
      role: "Model",
      hook: "Jung, ambitioniert und sehr bewusst in ihrer Wirkung. Viktoria arbeitet als Model, provoziert gern und ueberschreitet Grenzen nicht aus Versehen, sondern mit voller Absicht.",
      tagline: "Provokation mit voller Absicht.",
      cardDescription: "Eine Figur mit klarer Haltung und starker Ausstrahlung.",
      theme: "linear-gradient(135deg, #3f4f5b 0%, #12181d 100%)",
      selectionImage: "url('assets/images/viktoria_selection.png')",
      portrait: "linear-gradient(135deg, rgba(143, 172, 190, 0.34), rgba(16, 20, 24, 0.86))",
      tabs: [
        {
          id: "overview",
          label: "Ueberblick",
          kicker: "Erster Eindruck",
          title: "Viktoria weiss genau, was ihr Anblick ausloest, und nutzt es bewusst.",
          background: "url('assets/images/viktoria_ueberblick.png')",
          paragraphs: [
            "Viktoria ist jung, ambitioniert und arbeitet als Model. Sie kennt die Wirkung ihrer Erscheinung sehr genau und hat kein Interesse daran, diese kleiner zu machen, als sie ist.",
            "Provokation ist bei ihr kein Versehen, sondern Stilmittel. Sie liebt es, Grenzen auszutesten und stoert sich nicht daran, dass viele sie kennen, ansehen oder sich an ihr festlesen."
          ]
        },
        {
          id: "relations",
          label: "Beziehungen",
          kicker: "Dynamiken",
          title: "Viktoria haelt nichts von Liebe, die Besitz aus ihr machen will.",
          background: "url('assets/images/viktoria_beziehungen.png')",
          paragraphs: [
            "Viktoria haelt nichts von festen Beziehungen. Fuer sie ist Liebe nur dann ehrlich, wenn sie nicht in Ketten gelegt wird und nicht versucht, einen Menschen in Besitz zu verwandeln.",
            "Gerade deshalb betrachtet sie die Ehe als etwas Falsches. Wenn man jemanden aufrichtig liebt, warum sollte man diese Person einschraenken, statt ihr zu wuenschen, dass sie sich frei entfalten, ausleben und weiterentwickeln kann?"
          ]
        }
      ],
      audio: {
        src: "assets/audio/Viktoria - When Love Becomes A Law.mp3",
        label: "When Love Becomes A Law"
      }
    },
    {
      id: "asta",
      name: "Asta",
      role: "Viera",
      status: "WIP",
      hook: "Asta ist eine Viera, deren Herkunft nie ganz klar wird. Sicher ist nur, dass sie aus den tiefen Waeldern stammt und eine Wildheit mitbringt, die sich nicht glatt einordnen laesst.",
      tagline: "Wald, Tanz und Alchemie.",
      cardDescription: "Eine Viera mit unklarer Herkunft, Kampfkunst und einem Leben zwischen Wildnis und Handwerk.",
      theme: "linear-gradient(135deg, #7a513a 0%, #20110f 100%)",
      selectionImage: "url('assets/images/asta_selection.png')",
      portrait: "url('assets/images/asta_dancer.png')",
      tabs: [
        {
          id: "overview",
          label: "Ueberblick",
          kicker: "Erster Eindruck",
          title: "Asta traegt Wildnis, Koerperspannung und Instinkt offen an der Oberflaeche.",
          background: "url('assets/images/asta_ueberblick.png')",
          paragraphs: [
            "Asta ist eine Viera, doch wo genau sie herkommt, weiss kaum jemand sicher. Alles, was man ueber sie sagen kann, fuehrt in irgendwelche tiefen Waelder und zu einem Stamm, der eher unzivilisiert lebt.",
            "Sie bewegt sich wie jemand, der nie ganz verlernt hat, auf Instinkt zu hoeren. Die Seite wird noch vervollstaendigt, aber Herkunft, Auftreten und erste Wirkung sind hier bereits angelegt."
          ]
        },
        {
          id: "story",
          label: "Story",
          kicker: "Hintergrund",
          title: "Ihre Geschichte beginnt in Waeldern, ueber die mehr gemunkelt als gewusst wird.",
          background: "url('assets/images/asta_dancer.png')",
          paragraphs: [
            "Asta stammt offenbar aus einem Viera-Stamm, der abgeschieden und wenig zivilisiert lebt. Vieles daran bleibt unklar, und genau diese Unklarheit sollte auch in ihrem Profil erhalten bleiben.",
            "Dieser Bereich wird noch weiter ausgebaut, aber die Grundlinie steht: Waldherkunft, eine ungeschliffene Praegung und ein Leben, das nicht aus Staedten oder Hoefen kommt."
          ]
        },
        {
          id: "relations",
          label: "Beziehungen",
          kicker: "Dynamiken",
          title: "Asta bringt Bewegung in jede Dynamik, weil sie selten nach fremden Regeln spielt.",
          background: "linear-gradient(135deg, rgba(184, 124, 76, 0.58), rgba(18, 12, 10, 0.88)), url('assets/images/asta-relations.jpg')",
          paragraphs: [
            "Als Taenzerin und Kaempferin bringt sie Koerperbeherrschung, Tempo und eine gewisse Unberechenbarkeit mit. Das wirkt auf andere selten neutral.",
            "Auch dieser Bereich wird noch vervollstaendigt, aber spaeter passen hier Spannungen aus Kulturunterschieden, Naehe, Misstrauen oder Faszination sehr gut hinein."
          ]
        },
        {
          id: "craft",
          label: "Handwerk",
          kicker: "Alltag",
          title: "Ihr Gil verdient Asta nicht nur mit Kampf, sondern mit Alchemie.",
          background: "linear-gradient(135deg, rgba(126, 92, 54, 0.58), rgba(19, 13, 10, 0.88)), url('assets/images/asta-craft.jpg')",
          paragraphs: [
            "Asta ist Taenzerin im Sinne der Kampfklasse aus FFXIV. Ihren Lebensunterhalt verdient sie sich jedoch auch mit Alchemie, Tinkturen und Traenken.",
            "Diese Seite ist noch nicht vollstaendig, aber dieser Reiter setzt bereits den praktischen Kern der Figur: Kampfkunst, Handwerk und ein Einkommen, das aus eigenem Koennen entsteht."
          ]
        }
      ],
      audio: {
        src: "assets/audio/Asta - From Hide to Velvet.mp3",
        label: "From Hide to Velvet"
      }
    },
    {
      id: "nanuk",
      name: "Nanuk",
      role: "Die Stille mit Gewicht",
      status: "WIP",
      hook: "Nanuk wirkt still, aber nie leer. Um die Figur liegt jene Art von Ruhe, die nicht beruhigt, sondern lauschen laesst.",
      tagline: "Reduziert im Ausdruck, stark in der Wirkung.",
      cardDescription: "Eine geerdete, ruhigere Figur fuer melancholische oder konzentrierte Szenen.",
      theme: "linear-gradient(135deg, #5d516f 0%, #17141f 100%)",
      selectionImage: "linear-gradient(135deg, rgba(165, 144, 214, 0.34), rgba(18, 14, 24, 0.88))",
      portrait: "linear-gradient(135deg, rgba(165, 144, 214, 0.34), rgba(18, 14, 24, 0.88))",
      tabs: [
        {
          id: "overview",
          label: "Ueberblick",
          kicker: "Erster Eindruck",
          title: "Nanuk wirkt ruhig, bleibt aber in den entscheidenden Punkten schwer zu greifen.",
          background: "linear-gradient(135deg, rgba(133, 112, 180, 0.6), rgba(13, 10, 18, 0.86)), url('assets/images/nanuk-overview.jpg')",
          paragraphs: [
            "Nanuk spricht selten zuerst. Wenn die Figur einen Raum betritt, veraendert sich weniger die Lautstaerke als die Richtung, in die Blicke und Gedanken kippen.",
            "In Haltung, Schweigen und kleinen Reaktionen liegt mehr Gewicht als in langen Erklaerungen. Gerade dadurch entsteht eine Praesenz, die nachwirkt."
          ]
        },
        {
          id: "story",
          label: "Story",
          kicker: "Hintergrund",
          title: "Die Biografie sollte ruhig geschrieben sein, aber nicht leer oder glatt.",
          background: "linear-gradient(135deg, rgba(109, 87, 132, 0.62), rgba(14, 11, 18, 0.88)), url('assets/images/nanuk-story.jpg')",
          paragraphs: [
            "Man erzaehlt sich von Wintern, in denen Nanuk verschwand und erst mit Tauwetter zurueckkehrte, als haette die Kaelte selbst die Figur fuer eine Weile verschluckt.",
            "Ob an diesen Geschichten etwas stimmt, ist nie ganz klar. Doch sie passen zu jemandem, dessen Vergangenheit eher in Fragmenten als in sauberer Chronik ueberliefert wird."
          ]
        },
        {
          id: "gallery",
          label: "Motive",
          kicker: "Visuelle Ebene",
          title: "Dieser Reiter eignet sich fuer Symbole, Farben und wiederkehrende Bilder.",
          background: "linear-gradient(135deg, rgba(84, 98, 140, 0.58), rgba(10, 11, 16, 0.9)), url('assets/images/nanuk-gallery.jpg')",
          paragraphs: [
            "Zu Nanuk passen kalte Horizonte, matter Himmel, Fellsaeume, Atem in klarer Luft und das Knirschen von Schnee unter Schritten, die nie eilig wirken.",
            "Wiederkehrende Motive duerfen hier immer etwas Archaisches tragen: Wind, Eis, Tierzeichen, stille Wachsamkeit und Dinge, die laenger ueberdauern als Worte."
          ]
        }
      ],
      audio: {
        src: "assets/audio/nanuk-theme.mp3",
        label: "Nanuk Theme"
      }
    },
    {
      id: "asahi",
      name: "Asahi",
      role: "Der Gegenzug",
      status: "WIP",
      hook: "Asahi wirkt verlaesslich, aber nie passiv. In jeder Bewegung liegt das Gefuehl, dass die Figur erst reagiert, wenn Reaktion auch wirklich noetig ist.",
      tagline: "Ein ruhiger Gegenpol mit klarer Kante.",
      cardDescription: "Eine stabile, konzentrierte Figur als Gegenakzent zu expressiveren Charakteren.",
      theme: "linear-gradient(135deg, #49594b 0%, #121714 100%)",
      selectionImage: "linear-gradient(135deg, rgba(131, 159, 123, 0.34), rgba(15, 19, 16, 0.88))",
      portrait: "linear-gradient(135deg, rgba(131, 159, 123, 0.34), rgba(15, 19, 16, 0.88))",
      tabs: [
        {
          id: "overview",
          label: "Ueberblick",
          kicker: "Erster Eindruck",
          title: "Asahi muss nicht laut sein, um das Gewicht einer Szene zu veraendern.",
          background: "linear-gradient(135deg, rgba(90, 116, 94, 0.62), rgba(10, 14, 11, 0.86)), url('assets/images/asahi-overview.jpg')",
          paragraphs: [
            "Asahi ist kein Charakter, der um Aufmerksamkeit bittet. Die Figur haelt Positionen, Beobachtungen und Entscheidungen zusammen, bis andere laengst unruhig geworden waeren.",
            "Gerade diese Disziplin macht Asahi zu einem Gegenpol fuer lautere Dynamiken. Nichts daran wirkt weich, aber fast alles daran wirkt kontrolliert."
          ]
        },
        {
          id: "story",
          label: "Story",
          kicker: "Hintergrund",
          title: "Die Geschichte sollte zeigen, warum Ruhe nicht mit Einfachheit verwechselt werden darf.",
          background: "linear-gradient(135deg, rgba(90, 95, 62, 0.64), rgba(14, 15, 10, 0.88)), url('assets/images/asahi-story.jpg')",
          paragraphs: [
            "In manchen Erzaehlungen taucht Asahi dort auf, wo bereits etwas aus dem Gleichgewicht geraten ist: nicht als Rettergestalt, sondern als jemand, der Folgen eher traegt als kommentiert.",
            "Die Vergangenheit der Figur darf Spuren von Pflicht, Bruchstellen und stillen Entscheidungen tragen, ueber die niemand leichtfertig spricht."
          ]
        },
        {
          id: "relations",
          label: "Beziehungen",
          kicker: "Dynamiken",
          title: "Seine Verbindungen wirken stabil, bis jemand an den falschen Punkt greift.",
          background: "linear-gradient(135deg, rgba(97, 116, 112, 0.56), rgba(11, 14, 15, 0.9)), url('assets/images/asahi-relations.jpg')",
          paragraphs: [
            "Asahis Bindungen wirken oft klarer, als sie sind. Loyalitaet ist bei dieser Figur kein leichtes Versprechen, sondern etwas, das mit Konsequenzen bezahlt wird.",
            "Wer sich Asahi naehern will, trifft eher auf Zurueckhaltung als auf Ablehnung. Doch wenn Vertrauen einmal steht, wird es nicht leicht wieder geloest."
          ]
        },
        {
          id: "notes",
          label: "Notizen",
          kicker: "Zusatz",
          title: "Kleine Fakten funktionieren hier besser als ueberladene Listen.",
          background: "linear-gradient(135deg, rgba(74, 88, 82, 0.58), rgba(10, 12, 12, 0.9)), url('assets/images/asahi-notes.jpg')",
          paragraphs: [
            "Zu Asahi passen sparsame Gesten, ordentlich behandelte Gegenstaende, geuebte Routinen und der Eindruck, dass nichts ohne Grund dort liegt, wo es liegt.",
            "Leitsaetze, kleine Gewohnheiten oder stille Marotten funktionieren hier besser als grosse Enthuellungen. Die Figur gewinnt ueber Verdichtung, nicht ueber Lautstaerke."
          ]
        }
      ],
      audio: {
        src: "assets/audio/asahi-theme.mp3",
        label: "Asahi Theme"
      }
    }
  ]
};
