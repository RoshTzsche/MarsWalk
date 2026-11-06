# Marswalk 3D

**[Español](#español) · [English](#english)**

> Simulador web de caminatas extravehiculares (EVA) en Marte sobre terreno real de la NASA, con telemetría fisiológica del astronauta, capas científicas y planificación de rutas seguras.
> Web-based Mars EVA (spacewalk) simulator on real NASA terrain, with astronaut physiological telemetry, science layers and safe-route planning.

Proyecto para / Built for **NASA Space Apps Challenge** · Three.js 0.169 · Vite 6 · JavaScript (ES Modules)

---

## Español

### ¿Qué es?

Marswalk 3D te pone en la superficie de Marte. Partes de una vista orbital del cráter **Jezero** (donde aterrizó el rover Perseverance) construida con un modelo digital de elevación real, colocas a tu astronauta y bajas a caminar en primera persona. Mientras caminas, el simulador calcula cuánto oxígeno gastas, cómo sube tu ritmo cardíaco, tu temperatura corporal y tu hidratación según la pendiente, la carga del traje y el clima marciano.

Sirve a dos públicos:

| Público | Qué obtiene |
|---|---|
| **Público general / estudiantes** | Una experiencia narrativa y visual de cómo sería caminar en Marte. |
| **Astronautas, planificadores e investigadores** | Un banco de pruebas para comparar rutas (A\*, QAOA, rutas por salud), ver el costo fisiológico de cada tramo y probar escenarios como tormentas de polvo o grupos de 3 tripulantes. |

### Funciones principales

- **Terreno real a escala 1:1** (1 unidad = 1 metro) a partir de DEM CTX de 20 m/px del cráter Jezero, más un cráter sintético para validación.
- **Vista orbital** con capas activables: textura base, pendiente, riesgo, POIs, mineralogía (CRISM) e inercia térmica (THEMIS).
- **Primera persona** con parche local de alta resolución (2 × 2 km), gravedad marciana (3.71 m/s²), caminar, correr y saltar.
- **HUD EVA**: O₂, flujo metabólico, velocidad, elevación, pendiente, brújula, minimapa, cronómetro y alertas.
- **Modelo fisiológico** (Pandolf corregido a gravedad marciana): tasa metabólica, VO₂/VCO₂, frecuencia cardíaca, volumen sistólico, temperatura central, hidratación. Modo **individual** o **grupo** (3 tripulantes con rotación de líder).
- **Rutas**: A\* clásico, QAOA (inspirado en computación cuántica), comparación lado a lado, ruta optimizada por salud con presets (Clásico, Balanceado, Ciencia, Seguridad máxima), travesía científica multi-POI y ruta de evacuación al refugio.
- **Clima y Sol**: condiciones MEDA (temperatura, presión, viento, opacidad τ), simulador de tormenta de polvo, ciclo solar marciano (Ls, hora solar local).
- **Ciencia interactiva**: POIs reales de Jezero, modelos 3D de Perseverance, Ingenuity y un hábitat; recolección de muestras con la tecla `E` y bitácora.
- **Cinemática de introducción** Tierra → Marte (≈ 11 s, se puede saltar).
- **Copiloto ARES-AI** (opcional) con Llama 3 vía Groq, o motor offline sin clave.
- **Cargador de DEM** en el navegador: arrastra un GeoTIFF Float32 o un `.f32`.

### Requisitos

- **Node.js 18+** (probado con 22) y npm.
- **Python 3.8+** solo para el pipeline de datos (sin dependencias externas).
- Navegador con WebGL 2 (Chrome, Edge, Firefox o Safari recientes).

### Inicio rápido

```bash
git clone https://github.com/AngelGab3/Preparation.git
cd Preparation
npm install
npm run dev
```

Abre:

- Cráter Jezero (CTX 20 m/px): `http://localhost:8000/?dataset=jezero_test`
- Cráter sintético (50 m/px): `http://localhost:8000/?dataset=synth_crater`

> **Importante:** el proyecto ya usa Vite. `python3 -m http.server` ya **no** funciona para la app porque `src/main.js` importa `three` como paquete npm. Para producción usa `npm run build` y sirve la carpeta `dist/`.

### Scripts

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo en el puerto 8000 (accesible desde el móvil en la misma red). |
| `npm run build` | Compila a `dist/`. |
| `npm run preview` | Sirve `dist/` en el puerto 4173. |
| `npm test` | Pruebas del modelo de salud (`node --test`, 37 pruebas). |
| `npm run lint` / `lint:fix` | ESLint sobre `src/`. |
| `npm run format` | Prettier. |
| `npm run validate:data` | Valida los datasets contra los contratos 4.1–4.4. |
| `npm run check` | Lint + validación de datos + build. |

### Controles

**Vista orbital**
- Rotar / zoom / desplazar: clic izquierdo + arrastrar / rueda / clic derecho + arrastrar.
- Clic en el terreno o en un POI: elevación, pendiente, distancia y ficha científica.
- Arrastra el astronauta desde el dock al mapa para colocarlo.
- Panel de ruta: elige algoritmo y marca inicio (A) y destino (B).

**Primera persona** (doble clic en el astronauta o botón «Entrar en 1ª persona»)

| Tecla | Acción |
|---|---|
| `W` `A` `S` `D` / flechas | Caminar (1.2 m/s) |
| `Shift` | Correr (2.5 m/s) |
| `Espacio` | Saltar |
| `E` | Interactuar con POI, rover o hábitat |
| `T` | Activar / desactivar tormenta de polvo |
| `C` | Comunicaciones con el copiloto ARES-AI |
| `Esc` | Volver a vista orbital |

### Estructura del proyecto

```
├── index.html               UI completa (HUD, paneles, popup, cinemática, modales)
├── src/
│   ├── main.js              Arranque y bucle de render
│   ├── config.js            Constantes globales (en metros, sin datos de zona)
│   ├── state.js             Estado compartido
│   ├── scene.js             Escena, cámara, luces, cielo, Fobos, estrellas
│   ├── terrain.js           Carga del DEM, malla, capas, clima, Sol, rutas A*/QAOA, POIs
│   ├── controls.js          Órbita / 1ª persona, física de marcha, HUD
│   ├── raycast.js           Muestreo de altura y pendiente sobre el DEM
│   ├── astronaut.js         Astronauta y dock
│   ├── popup.js             Ficha de información
│   ├── artifacts3d.js       Rover, helicóptero, hábitat, tubos de muestra
│   ├── cinematic.js         Intro Tierra → Marte y cargador de DEM
│   ├── copilot.js           Copiloto ARES-AI
│   ├── health*.js           Modelo fisiológico, grupo y rutas por salud
│   └── styles.css
├── public/data/<dataset>/   metadata.json, heightmap.f32, texture.png, config_*.json, route.json, poi.json
├── data_pipeline/           convert_dem.py, validate_contracts.py
├── tests/                   Pruebas del modelo de salud
├── docs/                    Documentación (ver abajo)
└── Semana 1/                Prototipo original y datos fuente (histórico)
```

### Datos

Cada dataset vive en `public/data/<dataset_id>/` y se describe con contratos JSON. Cambiar de zona **no requiere tocar código**.

Convertir un GeoTIFF nuevo:

```bash
python3 data_pipeline/convert_dem.py \
  --dem "Semana 1/JEZ_ctx_B_soc_008_DTM_MOLAtopography_DeltaGeoid_20m_Eqc_latTs0_lon0.tif" \
  --texture "Semana 1/jezero_heightmap.png" \
  --dataset-id jezero_test
python3 data_pipeline/validate_contracts.py
```

### Copiloto ARES-AI

Funciona sin configuración con un motor offline. Para respuestas de un LLM, abre ⚙️ en el panel del copiloto y pega una clave de Groq. La clave se guarda en `localStorage` de tu navegador y se envía directamente a Groq desde el cliente: **no la uses en un despliegue público**.

### Documentación

| Documento | Contenido |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Módulos, flujo de arranque, estado, contratos de datos, deuda técnica. |
| [`docs/METRICS.md`](docs/METRICS.md) | Inventario de todas las métricas, unidades, umbrales, fuentes y en qué nivel de la UI mostrarlas. |
| [`docs/UX_REDESIGN_BRIEF.md`](docs/UX_REDESIGN_BRIEF.md) | Rediseño UI/UX: historia (scrollytelling), sistema visual, estructura para Figma, recursos de video, i18n. |
| [`docs/contrato_4.5.md`](docs/contrato_4.5.md) | Contrato `config_health.json`. |
| [`ORQUESTADOR.md`](ORQUESTADOR.md) | Documento maestro de tareas y registro de decisiones. |

### Fuentes de datos

- DEM CTX de Jezero (20 m/px) con topografía MOLA — NASA / USGS / MRO.
- Sitios científicos: misión Mars 2020 (Perseverance).
- Constantes físicas: NASA Mars Fact Sheet. Fisiología: NASA-STD-3001 / HIDH, ecuación de Pandolf.

### Licencia

Aún no definida. Hasta que se agregue un archivo `LICENSE`, todos los derechos quedan reservados a los autores.

---

## English

### What is it?

Marswalk 3D puts you on the surface of Mars. You start from an orbital view of **Jezero crater** (where the Perseverance rover landed), built from a real digital elevation model, drop your astronaut on the map and walk it in first person. As you walk, the simulator computes how much oxygen you burn and how your heart rate, core temperature and hydration change with slope, suit load and Martian weather.

It serves two audiences:

| Audience | What they get |
|---|---|
| **General public / students** | A narrative, visual experience of what walking on Mars would be like. |
| **Astronauts, planners and researchers** | A testbed to compare routes (A\*, QAOA, health-aware routes), see the physiological cost of each leg and try scenarios such as dust storms or 3-person crews. |

### Key features

- **Real terrain at 1:1 scale** (1 unit = 1 meter) from a 20 m/px CTX DEM of Jezero crater, plus a synthetic crater for validation.
- **Orbital view** with toggleable layers: base texture, slope, risk, POIs, mineralogy (CRISM) and thermal inertia (THEMIS).
- **First person** with a high-resolution local patch (2 × 2 km), Martian gravity (3.71 m/s²), walk, run and jump.
- **EVA HUD**: O₂, metabolic flow, speed, elevation, slope, compass, minimap, timer and alerts.
- **Physiological model** (Pandolf corrected for Martian gravity): metabolic rate, VO₂/VCO₂, heart rate, stroke volume, core temperature, hydration. **Solo** or **group** mode (3 crew with leader rotation).
- **Routes**: classic A\*, QAOA (quantum-inspired), side-by-side comparison, health-optimized route with presets (Classic, Balanced, Science, Maximum safety), multi-POI science traverse and evacuation route to shelter.
- **Weather and Sun**: MEDA conditions (temperature, pressure, wind, opacity τ), dust storm simulator, Martian solar cycle (Ls, local solar time).
- **Interactive science**: real Jezero POIs, 3D models of Perseverance, Ingenuity and a habitat; sample collection with `E` and a science log.
- **Intro cinematic** Earth → Mars (≈ 11 s, skippable).
- **ARES-AI copilot** (optional) with Llama 3 via Groq, or an offline engine with no key.
- **In-browser DEM loader**: drop a Float32 GeoTIFF or a `.f32` file.

### Requirements

- **Node.js 18+** (tested on 22) and npm.
- **Python 3.8+** only for the data pipeline (no external dependencies).
- A WebGL 2 browser (recent Chrome, Edge, Firefox or Safari).

### Quick start

```bash
git clone https://github.com/AngelGab3/Preparation.git
cd Preparation
npm install
npm run dev
```

Open:

- Jezero crater (CTX 20 m/px): `http://localhost:8000/?dataset=jezero_test`
- Synthetic crater (50 m/px): `http://localhost:8000/?dataset=synth_crater`

> **Note:** the project now uses Vite. `python3 -m http.server` **no longer** works for the app because `src/main.js` imports `three` as an npm package. For production run `npm run build` and serve `dist/`.

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server on port 8000 (reachable from a phone on the same network). |
| `npm run build` | Builds to `dist/`. |
| `npm run preview` | Serves `dist/` on port 4173. |
| `npm test` | Health model tests (`node --test`, 37 tests). |
| `npm run lint` / `lint:fix` | ESLint on `src/`. |
| `npm run format` | Prettier. |
| `npm run validate:data` | Validates datasets against contracts 4.1–4.4. |
| `npm run check` | Lint + data validation + build. |

### Controls

**Orbital view**
- Rotate / zoom / pan: left-drag / wheel / right-drag.
- Click the terrain or a POI: elevation, slope, distance and science card.
- Drag the astronaut from the dock onto the map to place it.
- Route panel: pick an algorithm and set start (A) and goal (B).

**First person** (double-click the astronaut or "Enter first person")

| Key | Action |
|---|---|
| `W` `A` `S` `D` / arrows | Walk (1.2 m/s) |
| `Shift` | Run (2.5 m/s) |
| `Space` | Jump |
| `E` | Interact with POI, rover or habitat |
| `T` | Toggle dust storm |
| `C` | Comms with the ARES-AI copilot |
| `Esc` | Back to orbital view |

### Project structure

See the tree in the Spanish section above; folder and file names are the same.

### Data

Each dataset lives in `public/data/<dataset_id>/` and is described by JSON contracts. Switching sites **requires no code changes**. To convert a new GeoTIFF, run `data_pipeline/convert_dem.py` and then `data_pipeline/validate_contracts.py` (commands above).

### ARES-AI copilot

Works out of the box with an offline engine. For LLM answers, open ⚙️ in the copilot panel and paste a Groq API key. The key is stored in your browser's `localStorage` and sent to Groq directly from the client: **do not use it on a public deployment**.

### Documentation

| Document | Contents |
|---|---|
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | Modules, boot flow, state, data contracts, technical debt. |
| [`docs/METRICS.md`](docs/METRICS.md) | Inventory of every metric, units, thresholds, sources and which UI level shows it. |
| [`docs/UX_REDESIGN_BRIEF.md`](docs/UX_REDESIGN_BRIEF.md) | UI/UX redesign: story (scrollytelling), visual system, Figma structure, video sources, i18n. |
| [`docs/contrato_4.5.md`](docs/contrato_4.5.md) | `config_health.json` contract. |
| [`ORQUESTADOR.md`](ORQUESTADOR.md) | Master task document and decision log (Spanish). |

### Data sources

- Jezero CTX DEM (20 m/px) with MOLA topography — NASA / USGS / MRO.
- Science sites: Mars 2020 mission (Perseverance).
- Physical constants: NASA Mars Fact Sheet. Physiology: NASA-STD-3001 / HIDH, Pandolf equation.

### License

Not defined yet. Until a `LICENSE` file is added, all rights are reserved by the authors.
