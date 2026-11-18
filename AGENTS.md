# Projektanweisungen

<!-- project-knowledge:start -->
## Projektwissen und Pläne

- Gemeinsames, dauerhaftes Projektwissen liegt unter `docs/knowledge/`; aktive,
  ausreichend ausgearbeitete Vorhaben liegen unter `docs/plans/`.
- Lies bei benötigtem Projektverständnis den Knowledge-Index und nur passende
  Einträge; den Plan-Index bei geplanter oder laufender nichttrivialer Umsetzung.
  Nutze bereits gelesenen, unveränderten Kontext weiter.
- Nutze die Skill `project-knowledge`, sofern sie verfügbar ist. Fehlt sie,
  befolge den hier beschriebenen Lebenszyklus direkt.
- Halte als Knowledge nur verifiziertes, dauerhaftes und nicht offensichtlich
  aus dem Code ableitbares Wissen fest. Keine Chatprotokolle, Zugangsdaten,
  temporären Debug-Notizen oder spekulativen Aussagen.
- Lege einen Plan nur für ein nicht triviales, ausreichend abgestimmtes oder
  ausgearbeitetes Vorhaben an. Kleine Änderungen und lose Ideen brauchen keine
  eigene Plan-Datei.
- Prüfe vor Abschluss relevanter Implementierungs- und Review-Aufgaben, ob
  Knowledge erstellt oder aktualisiert werden muss. Nach vollständiger
  Umsetzung eines Plans überführe den weiterhin gültigen Inhalt in Knowledge
  und entferne Plan sowie Indexeintrag in derselben Änderung.
- In einem read-only Review formulierst du nötige Dokumentationsänderungen als
  Befund und schreibst sie nur, wenn der Auftrag auch Änderungen erlaubt.
<!-- project-knowledge:end -->

## Projekt und Referenzen

- Das Projekt folgt der gemeinsamen Vite-/React-/Redux-Modularchitektur aus `synatos/atlas.f2` und `synatos/techni.f2`.
- Fachcode liegt unter `src/modules/<domain>/`; zentrale Registrierungen erfolgen ausschließlich in `src/modules/routes.jsx` und `src/modules/store.jsx`.
- Container verbinden Views mit Selektoren und Actions. Views greifen nicht direkt auf Store oder API zu.
- Asynchrone Backend-Aufrufe verwenden ausschließlich `src/util/api.jsx`; keine direkte `fetch`-Nutzung in Fachmodulen.
- Die visuelle und inhaltliche Ausgangsreferenz liegt im benachbarten Repository `../../vh-asia-sushi`. Änderungen dieses Projekts werden dort nicht zurückgeschrieben.
- Bilder, Logos und Schriften bleiben lokal unter `public/assets/`. Herkunft und Originale verbleiben im Ausgangsrepository unter `docs/source/`.
- Second Brain: [Asia und Sushi](../../second-brain/02%20Vorhaben/Asia%20und%20Sushi%20%E2%80%93%20Website%20erneuern%20und%20Domain%20%C3%BCbernehmen.md).
- Commit, Push, Deployment und Domainänderungen benötigen einen ausdrücklichen Auftrag.
