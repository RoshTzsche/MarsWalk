# Arquitectura · Marswalk 3D

> Estado del código al commit `b044ebf` (6 nov 2026). Documento técnico para quien vaya a modificar o rediseñar la app.

## 1. Stack

| Capa | Tecnología |
|---|---|
| Render 3D | Three.js 0.169 (WebGL) |
| Build / dev server | Vite 6 (`index.html` → `src/main.js`) |
| Lenguaje | JavaScript ES Modules, sin framework de UI |
| UI | HTML estático en `index.html` + DOM manipulado a mano desde los módulos |
| Estilos | Un solo `src/styles.css` (≈ 2,500 líneas) con variables CSS |
| Datos | JSON + binario Float32 en `public/data/` |
| Pipeline | Python 3 sin dependencias (`data_pipeline/`) |
| Pruebas | `node:test` sobre el modelo de salud |
| IA (opcional) | Groq API (Llama 3) llamada desde el navegador |

No hay backend. Todo corre en el cliente.

## 2. Flujo de arranque (`src/main.js`)

```
initControls()            OrbitControls + PointerLockControls
await loadHeightmap()     metadata.json → heightmap.f32 → texture.png → capas, POIs, rutas, clima
benchmarkGroundSampling   mide muestreo bilineal vs raycast (consola)
await initHealthState()   config_health.json → modelo solo o grupo
initAstronaut()           dock + arrastre
initPopup(), initCopilotUI()
initRealtimeDemLoader()   arrastrar y soltar DEM
initIntroCinematic()      cinemática Tierra → Marte (≈ 11.5 s, 3 actos)
animate()                 bucle: controles, popup, rutas, artefactos, ciclo solar, render
```

El dataset se elige con `?dataset=<id>` (por defecto `jezero_test`).

## 3. Módulos

| Archivo | Líneas | Responsabilidad |
|---|---:|---|
| `main.js` | 86 | Arranque y bucle de animación. |
| `config.js` | 39 | Constantes en metros/segundos. Sin datos de zona. |
| `state.js` | 122 | Estado global mutable (modo, DEM, fisiología, HUD, clima, Sol, rutas, POIs, salud). |
| `scene.js` | 275 | Escena, cámara, renderer, luces, linterna del casco, cielo, Fobos, disco solar, estrellas. |
| `terrain.js` | 3,305 | **Módulo central y el más grande.** Carga del DEM, malla global y parche local, capas (base, pendiente, riesgo, CRISM, THEMIS), física solar, clima y tormenta, A\*, QAOA, perfil de elevación, travesía científica, POIs, cargador de DEM en vivo, integración de rutas por salud. |
| `controls.js` | 1,086 | Modos órbita / 1ª persona, transiciones, física de marcha y salto, consumo de O₂, actualización del HUD, interacciones `E`/`T`/`C`. |
| `raycast.js` | 252 | `sampleGroundY`, `sampleSlopeDeg`, `getSlopeCostFactor`, raycast del puntero. |
| `popup.js` | 209 | Ficha de punto/POI con botones de ruta y "visitar". |
| `astronaut.js` | 228 | Malla del astronauta y dock. |
| `artifacts3d.js` | 471 | Modelos procedurales: Perseverance, Ingenuity, hábitat, tubos de muestra. |
| `cinematic.js` | 581 | Intro en `<canvas>` 2D y cargador de GeoTIFF en el navegador. |
| `copilot.js` | 400 | Copiloto ARES-AI: snapshot de misión, Groq, motor offline, voz. |
| `health.js` | 196 | Modelo fisiológico por segmento (funciones puras). |
| `health_defaults.js` | 119 | Parámetros por defecto del contrato 4.5 y lista de lo no modelado. |
| `health_group.js` | 162 | Modo grupo: rotación de líder, agregación, preferencia en `localStorage`. |
| `health_route.js` | 104 | Costo de ruta por salud sobre una ruta existente. |
| `health_route_astar.js` | 348 | A\* multidimensional por salud, presets y comparador clásico vs salud. |

## 4. Contratos de datos (`public/data/<dataset_id>/`)

| Contrato | Archivo | Obligatorio | Contenido |
|---|---|---|---|
| 4.1 | `metadata.json` + `heightmap.f32` | Sí | Tamaño en metros, resolución, rango de elevación, capas, fecha, nota de incertidumbre. Heightmap Float32 little-endian en metros. |
| 4.2 | `config_fisio.json` | No | Gravedad, altura de ojos, velocidades, pendiente segura, reserva y consumo de O₂, factores de costo por pendiente. |
| 4.3 | `route.json` | No | Ruta precalculada (`path_m`) y métricas. |
| 4.4 | `poi.json` | No | Puntos de interés (`sampling`, `hazard`, `shelter`). |
| 4.5 | `config_health.json` | No | Masa corporal y del traje, factor de terreno, tamaño del grupo y miembros. |

Coordenadas: metros, origen en el centro del mapa, x = este, z = sur. La exageración vertical es solo visual; todos los cálculos científicos usan el DEM sin exagerar.

## 5. Estado global (`state.js`)

Bloques principales: `mode`, `dem`, `metadata`, `layers`, `fisio`, `hud`, `weather`, `solar`, `route` / `qaoaRoute`, `pois`, `health` / `healthMode`, `routeCostDimensions` / `routeCostPreset`, `astronautPosition`. Detalle de cada métrica en [`METRICS.md`](METRICS.md).

## 6. Deuda técnica y riesgos detectados

| # | Hallazgo | Impacto | Recomendación |
|---|---|---|---|
| 1 | El README anterior decía "sin empaquetador" y `python -m http.server`; el proyecto ya usa Vite e importa `three` desde npm. | Quien siga el README viejo ve pantalla en blanco. | Corregido en el nuevo README. Actualizar `ORQUESTADOR.md` §2, §3 y §8. |
| 2 | `npm test` usaba `node --test tests/`, que falla en Node 22. | CI/pruebas rotas. | Corregido a `node --test tests/*.test.js` (37/37 pasan). |
| 3 | `terrain.js` (3,300 líneas) y `styles.css` (2,500) concentran demasiado. | Difícil rediseñar la UI sin romper lógica. | Separar en `terrain/` (mesh, layers, routes, weather, solar, pois) y CSS por componente antes del rediseño. |
| 4 | La UI está escrita a mano en `index.html` con textos en español incrustados en HTML y JS. | No hay i18n; el inglés exige tocar cientos de cadenas. | Extraer textos a `src/i18n/es.json` y `en.json` con una función `t(key)`; `lang` del `<html>` dinámico. |
| 5 | La clave de Groq se guarda en `localStorage` y se envía desde el navegador. | Expuesta si se publica el sitio. | Para demo pública, usar un proxy (función serverless) o dejar solo el motor offline. |
| 6 | Carpeta `Semana 1/` (≈ 19 MB) duplica código viejo y el GeoTIFF fuente. | Repo pesado y confuso. | Mover el `.tif` a una descarga documentada (`data/raw/`, ya en `.gitignore`) y archivar el prototipo en una rama o tag. |
| 7 | La cinemática dice "T+142 días" de tránsito. | Poco realista para una transferencia de Hohmann (≈ 7–9 meses). | Ajustar al guion de `UX_REDESIGN_BRIEF.md`. |
| 8 | No hay `LICENSE`. | Uso de terceros ambiguo. | Elegir licencia (MIT o Apache-2.0 son comunes). |
| 9 | Las alertas usan sobre todo color (cian, ámbar, rojo). | Accesibilidad para daltonismo. | Añadir icono + texto a cada estado. |
| 10 | No se respeta `prefers-reduced-motion`. | Mareo en la cinemática y el futuro scrollytelling. | Versión estática alternativa. |

## 7. Cómo encaja el rediseño

El rediseño propuesto en [`UX_REDESIGN_BRIEF.md`](UX_REDESIGN_BRIEF.md) agrega **antes** del simulador actual una capa nueva (selector de idioma → scrollytelling → briefing) y **reorganiza** los paneles del simulador en tres niveles de detalle. El motor 3D, el modelo de salud y los contratos de datos no cambian.
