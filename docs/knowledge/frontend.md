---
title: Frontendarchitektur und migrierter Websitebestand
status: current
updated: 2026-11-18
---

# Frontendarchitektur und migrierter Websitebestand

## Zweck und Grenzen

Das Repository enthält die öffentliche React-Website von Chikis Ichiraku. Ausgangspunkt ist das lokal geprüfte statische Redesign aus `vh-asia-sushi`. Backend, Admin und Betreiber-App liegen in eigenen Repositories. Kein Deployment oder Domainwechsel ist durch den lokalen Stand belegt.

## Aktueller Stand

Vite und React liefern Startseite, Bestellseite, Impressum, Datenschutz und eine Fehlerseite. Gestaltung, Inhalte, lokale Medien, responsive CSS-Regeln und Foodbooking-Einbettung wurden aus dem Ausgangsprojekt übernommen. Die kanonischen React-Routen sind `/`, `/bestellen`, `/impressum` und `/datenschutz`; die bisherigen Pfade unter `/pages/*.html` bleiben als Kompatibilitätsrouten erreichbar.

Der Datenschutzhinweis der Bestellseite verwendet den Redux-Zweig `website/privacy-notice`. Action, Type, Reducer und Selektor folgen dem gemeinsamen `.f`-Muster. Die Bestätigung gilt wie zuvor nur für die Browsersitzung.

Der Build rendert öffentliche Seiten und alte HTML-Pfade vorab als vollständige HTML-Dateien. `src/entry-server.jsx` nutzt dieselben Routen und Komponenten mit StaticRouter; `scripts/prerender.mjs` schreibt Seiten samt Titel und Beschreibung nach `dist/`. Der Browser aktiviert diese Ausgabe mit `hydrateRoot`. Ein Node-Prozess wird nur zum Bauen benötigt. Bei neuen öffentlichen Routen muss auch die Seitenliste des Prerender-Skripts ergänzt werden. Seitenwechsel setzen die Scrollposition nach oben; vorhandene Anker werden berücksichtigt.

## Wichtige Entscheidungen und Invarianten

- Zentrale Routen- und Reducerregistrierung erfolgt ausschließlich in `src/modules/routes.jsx` und `src/modules/store.jsx`.
- Fachcode liegt in `src/modules/website/`; Views bleiben ohne direkten Store- oder API-Zugriff, Container verbinden Selektoren und Actions.
- Verbindliche Preis-, Verfügbarkeits- und Bestelllogik wird später vom Symfony-Backend geliefert. Der Client darf diese Regeln nicht als alleinige Wahrheit berechnen.
- Foodbooking bleibt vorerst hinter der Bestellseitenkomponente eingebunden. Der spätere eigene Bestellablauf ersetzt diesen Bereich, ohne die öffentlichen Inhaltsseiten neu aufzubauen.
- Lokale Assets liegen unter `public/assets/`. Die dokumentierten Originale und Herkunftsnachweise verbleiben in `vh-asia-sushi/docs/source/`.
- Der Build ist statisch. Der Produktions-Webserver muss unbekannte Anwendungsrouten auf `index.html` zurückfallen lassen.

## Schnittstellen und Abhängigkeiten

Künftige Backend-Aufrufe laufen ausschließlich über `src/util/api.jsx`. Ohne `VITE_BACKEND_URL` werden gleich-originäre `/api/...`-Pfade verwendet. Die Bestellseite verbindet sich aktuell direkt mit dem dokumentierten Foodbooking-iframe.

## Verifikation

Am 18.11.2026 erfolgreich geprüft:

- `npm run lint`
- `npm run build`
- `npm audit --omit=dev`: keine bekannten Befunde in Produktionsabhängigkeiten
- Start- und Bestellseite bei 390 und 1440 Pixeln ohne horizontalen Überlauf
- Foodbooking-iframe mit echter Speisekarte geladen; keine Bestellung ausgelöst
- Datenschutzhinweis geschlossen und Zustand nach Neuladen innerhalb der Sitzung erhalten
- Kompatibilitätspfade für Impressum und Datenschutz direkt aufgerufen
- Vorgerenderte Produktionsseiten im Browser ohne Hydrationfehler geladen; Impressum-Navigation beginnt bei Scrollposition 0, `/datenschutz.html` zeigt die korrekte Seite.

Vite wurde auf 6.4.6 aktualisiert; die zuvor direkt gemeldeten Vite-Sicherheitslücken sind damit behoben. Die SSR-Konfiguration verarbeitet `react-router-dom` innerhalb von Vite und berücksichtigt dessen `module-sync`-Export, damit das Vorab-Rendering unter Vite 6 funktioniert.

Der vollständige npm-Audit meldet weiterhin vier High-Befunde entlang der Entwicklungskette `vite` / `tinyglobby` / `fdir` / `picomatch`. Ursache ist [GHSA-fc5q-39xc-vjpf](https://github.com/advisories/GHSA-fc5q-39xc-vjpf) in `picomatch` bis einschließlich 4.0.7; am Prüftag ist keine korrigierte Version veröffentlicht. Der von npm vorgeschlagene erzwungene Rückschritt auf Vite 6.2.7 würde bekannte Vite-Lücken wieder einführen. Diese Entwicklungsabhängigkeiten werden nicht in den statischen Produktionsbuild ausgeliefert; nach Veröffentlichung eines Upstream-Fixes erneut prüfen.
