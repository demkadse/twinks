# Twinks Codex Notes

## Ziel

Statische GitHub-Page fuer vier Charaktere:

- Selection-Seite als fullscreen Bildauswahl
- vier Charaktere: Viktoria, Asta, Nanuk, Asahi
- Charakteransicht mit linker Navigation
- Reiterwechsel ohne Seitenreload
- Musik soll innerhalb der Charakteransicht weiterlaufen
- Content links im Bild, ohne Boxen
- Hauptmotive der Bilder rechts

## Aktueller Stand

- `index.html` ist auf eine reduzierte Selection ohne Kopftext umgestellt.
- `character.html` nutzt eine gemeinsame Detailseite mit URL-Parameter `?character=...`.
- `js/main.js` rendert die Selection und die Charaktertabs.
- `css/styles.css` positioniert den Content links und laesst rechts Raum fuer Bildmotive.
- Datenschutz und Urheberrecht sind als Modals angelegt.

## Bekannte Medien im Projekt

- `assets/images/viktoria_selection.png`
- `assets/images/viktoria_ueberblick.png`
- `assets/images/viktoria_beziehungen.png`
- `assets/audio/Viktoria - When Love Becomes A Law.mp3`

Diese wurden bereits eingebunden:

- `viktoria_selection.png` als Viktorias Selection-Bild
- `viktoria_ueberblick.png` als Viktorias Ueberblick-Hintergrund
- `viktoria_beziehungen.png` als Viktorias Beziehungen-Hintergrund
- `Viktoria - When Love Becomes A Law.mp3` als Viktorias aktueller Track

## Medienkonvention

Wenn neue Dateien abgelegt werden, soll ihre Benennung direkt auf die Einbindung hindeuten:

- `<charakter>_selection.*` fuer die Auswahlansicht
- `<charakter>_ueberblick.*` fuer den Ueberblick-Reiter
- `<charakter>_relations.*` fuer Beziehungen
- `<charakter>_notes.*` fuer Notizen
- `<charakter>_gallery.*` fuer Motive
- `<charakter>-theme.*` fuer Audio

## Viktoria Stand

- Reiter aktuell: `Ueberblick`, `Beziehungen`
- `Story` und `Notizen` wurden auf Wunsch entfernt
- Beziehungen sind inhaltlich auf Viktorias Ablehnung fester Bindungen und Ehe ausgerichtet

## Naechster sinnvoller Schritt

- weitere echte Bilder und Audio fuer Asta, Nanuk und Asahi ablegen
- danach `js/data.js` weiter auf echte Inhalte statt Platzhalter bringen
