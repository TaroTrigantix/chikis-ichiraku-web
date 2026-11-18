# Chikis Ichiraku Web

React-Frontend für die öffentliche Website und das Bestellsystem von Asia & Sushi. Der aktuelle Stand migriert das geprüfte statische Redesign aus `vh-asia-sushi` in die gemeinsame `.f`-Architektur. Foodbooking bleibt vorerst als austauschbarer Bestellbereich eingebunden.

## Entwicklung

```sh
npm install
npm run dev
```

`VITE_BACKEND_URL` bleibt lokal standardmäßig leer. Künftige API-Aufrufe verwenden dadurch dieselbe Origin und Pfade unter `/api/...`.

## Prüfungen

```sh
npm run lint
npm run build
```

## Architektur

- `src/modules/routes.jsx`: zentrale Routenregistrierung.
- `src/modules/store.jsx`: zentrale Reducerregistrierung.
- `src/modules/website/`: öffentliche Seiten, Layout und websitebezogener Redux-State.
- `src/modules/website/state/privacy-notice/`: namespacete Action-, Type-, Reducer- und Selektorstruktur.
- `src/util/api.jsx`: einzige Schnittstelle für künftige Backend-Aufrufe.
- `public/assets/`: lokale Bilder, Logos und Schrift aus dem geprüften Ausgangsprojekt.

Der Produktionsbuild unter `dist/` ist statisch auslieferbar. Der Webserver muss Anwendungsrouten auf `index.html` zurückfallen lassen. Commit, Push, Deployment und Domainänderungen erfolgen nur nach ausdrücklichem Auftrag.

`npm run build` erzeugt vollständiges HTML für öffentliche Seiten und alte HTML-Pfade. Neue öffentliche Seiten zusätzlich in `scripts/prerender.mjs` registrieren. Bei Nginx vorhandene Dateien und Verzeichnisse vor dem SPA-Fallback ausliefern (`try_files $uri $uri/ /index.html`).

[Projektwissen](docs/knowledge/README.md) · [Pläne](docs/plans/README.md) · [Second-Brain-Vorhaben](../../second-brain/02%20Vorhaben/Asia%20und%20Sushi%20%E2%80%93%20Website%20erneuern%20und%20Domain%20%C3%BCbernehmen.md)
