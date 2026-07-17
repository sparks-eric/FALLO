# F.A.L.L.O.
### Finder And Logger of Lost Occurrences

Herramienta web para el registro de marcas de tiempo durante la visualización y control de programas audiovisuales. Diseñada para uso profesional en postproducción y emisión de televisión.

> Web-based timecode logging tool for audiovisual program review. Designed for professional use in TV post-production and broadcast.

---

## Español

### ¿Qué es F.A.L.L.O.?

F.A.L.L.O. es una herramienta de una sola página (sin instalación, sin servidor) pensada para anotar errores, fragmentos y marcas de tiempo mientras se visualiza un programa de televisión. Sustituye el papel o el Excel en los procesos de QC, visionado y control de emisión.

### Características

- **Cronómetro** sincronizado con la duración del programa
- **T.C. en tiempo real** — muestra la hora actual del sistema (GMT+1/Madrid), ajustable con offset
- **Marcas de tipo ERROR** — para registrar fallos con su timecode exacto
- **Marcas T.C. IN / T.C. OUT** — para delimitar fragmentos con entrada y salida
- **BLOCs** — separadores para organizar la sesión por bloques o actos
- **Campos de cabecera** — programa, episodio, contenido, fecha de grabación y fecha de emisión
- **Observaciones generales** de sesión
- **Edición de tiempos** — cualquier timecode es editable después de anotarlo
- **Exportación a PDF** — genera un informe listo para imprimir o adjuntar
- **Exportación a Word** — mismo informe en formato .doc
- **Exportación a AVID** — archivo .txt compatible con las listas de marcadores de Avid Media Composer
- **Exportación/importación de sesión** — guarda y recupera la sesión completa en JSON
- **Persistencia automática** — los datos se guardan en localStorage y sobreviven al cierre del navegador
- **Funciona sin conexión** — no necesita internet una vez cargado
- **Atajos de teclado** para uso en tiempo real sin apartar la vista del monitor

### Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `F1` | T.C. IN (inicia o pausa) |
| `F2` | T.C. OUT |
| `F3` / `Enter` | Marca ERROR |
| `F4` | Añadir BLOC |
| `Espacio` | Iniciar / pausar cronómetro |
| `Esc` | Salir del campo de texto activo |

### Uso

1. Abre `F_A_L_L_O.html` en cualquier navegador moderno
2. Rellena los campos de cabecera (programa, episodio, fecha...)
3. Pulsa **F1** para iniciar la sesión con T.C. IN
4. Durante el visionado, usa **F3** para marcar errores y **F1/F2** para delimitar fragmentos
5. Al acabar, exporta a PDF, Word o AVID según necesites

### Exportaciones

- **PDF / Word** — informe con cabecera (programa, episodio, fechas, duración) y tabla de marcas
- **AVID** — archivo de texto con el formato de marcadores de Avid Media Composer, listo para importar en la línea de tiempo
- **Sesión JSON** — exporta e importa el estado completo para continuar más tarde o compartir

---

## English

### What is F.A.L.L.O.?

F.A.L.L.O. is a single-page web tool (no installation, no server required) designed to log errors, segments and timecodes while reviewing a television program. It replaces paper or spreadsheets in QC, screening and broadcast control workflows.

### Features

- **Chronometer** synced to program duration
- **Real-time T.C.** — displays current system time (GMT+1/Madrid), adjustable with offset
- **ERROR marks** — log mistakes with their exact timecode
- **T.C. IN / T.C. OUT marks** — define segments with in and out points
- **BLOCs** — separators to organize the session by blocks or acts
- **Header fields** — program name, episode, content, recording date and air date
- **General session notes**
- **Time editing** — any timecode can be edited after it's been logged
- **PDF export** — generates a print-ready report
- **Word export** — same report in .doc format
- **AVID export** — .txt file compatible with Avid Media Composer marker lists
- **Session export/import** — save and restore the full session as JSON
- **Auto-persistence** — data is saved to localStorage and survives browser closure
- **Works offline** — no internet connection needed once loaded
- **Keyboard shortcuts** for real-time use without looking away from the monitor

### Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `F1` | T.C. IN (start or pause) |
| `F2` | T.C. OUT |
| `F3` / `Enter` | ERROR mark |
| `F4` | Add BLOC |
| `Space` | Start / pause chronometer |
| `Esc` | Exit active text field |

### Usage

1. Open `F_A_L_L_O.html` in any modern browser
2. Fill in the header fields (program, episode, date...)
3. Press **F1** to start the session with T.C. IN
4. During playback, use **F3** to mark errors and **F1/F2** to define segments
5. When done, export to PDF, Word or AVID as needed

### Exports

- **PDF / Word** — report with header (program, episode, dates, duration) and marks table
- **AVID** — text file in Avid Media Composer marker format, ready to import into the timeline
- **JSON session** — full state export/import to continue later or share with colleagues

---

## Licencia / License

MIT License — © 2026 Èric Castells
