# Brief de rediseño UI/UX · Marswalk 3D

> Base para construir el diseño en Figma y luego implementarlo. Escrito a partir de la revisión del código (commit `b044ebf`). Las fechas de la historia son **ficticias pero plausibles**; verificarlas con el NASA Trajectory Browser antes de publicarlas.

---

## 1. Diagnóstico de la UI actual

| Problema | Dónde | Efecto en el usuario |
|---|---|---|
| Todo aparece a la vez: panel derecho (dataset, capas, Sol, clima, copiloto) y panel izquierdo (ruta, perfil, comparador por salud con 7 dimensiones). | `index.html` `#layers-panel`, `#route-panel` | Una persona nueva no sabe dónde empezar. |
| Jerga técnica sin explicar: QAOA, LTST, Ls, τ, CRISM, THEMIS, PLSS. | Paneles y HUD | Intimida al público general. |
| Emojis como iconos (📍🚩🏁🔬⚙️). | Botones | Aspecto poco profesional e inconsistente entre sistemas operativos. |
| La intro es un canvas 2D de 11 s, en español, sin elección. | `cinematic.js` | No cuenta una historia ni engancha; no hay inglés. |
| Estados comunicados solo por color. | HUD | Problema de accesibilidad. |
| Sin onboarding: nadie explica arrastrar el astronauta ni los controles. | — | Abandono temprano. |
| Sin modo móvil real. | CSS | Paneles laterales tapan el mapa. |

## 2. Objetivos

1. **Contar una historia** que convierta "un visor de DEM" en "tu primera caminata en Marte".
2. **Dos capas de experiencia**: narrativa (scrollytelling) y simulador.
3. **Métricas completas pero graduadas** en 3 niveles (ver [`METRICS.md`](METRICS.md)).
4. **Bilingüe ES/EN** desde la primera pantalla.
5. **Accesible**: teclado, contraste AA, `prefers-reduced-motion`, subtítulos.

## 3. Personas

| Persona | Necesita | Nivel por defecto |
|---|---|---|
| **Sofía, 16, estudiante** | Entender qué pasa y sentir la emoción. | Explorador |
| **Marco, docente / juez de Space Apps** | Ver rigor (datos reales, fuentes) en pocos minutos. | Misión |
| **Dra. Ruiz, planificadora EVA / astronauta analógica** | Comparar rutas, ver costo fisiológico, exportar. | Astronauta |

## 4. Mapa de la experiencia

```
[0] Selector de idioma  →  [1–9] Scrollytelling "Misión ARES-01"  →  [10] Briefing  →  [11] Simulador
     ES / EN                 Tierra → lanzamiento → tránsito →          Nivel N1/N2/N3     Orbital ↔ 1ª persona
                             órbita → descenso → Jezero                 Solo / Grupo
                                                                        Tutorial corto
```

- Botón **"Saltar historia / Skip story"** visible siempre desde la escena 1. Usuarios que regresan saltan directo al briefing (recordar en `localStorage`).
- El idioma elegido se guarda y puede cambiarse luego en el menú.

## 5. Escena 0 · Selector de idioma

Pantalla negra con campo de estrellas lento. Centro:

> **MARSWALK**
> Elige tu idioma · Choose your language
> [ Español ]   [ English ]

Detecta `navigator.language` y resalta la opción probable, pero **siempre pregunta**. Al elegir, fundido a negro y arranca la escena 1 con sonido (con botón de silenciar).

## 6. Guion del scrollytelling · Misión ARES-01

Mecánica (como EnduroSat): cada escena es una sección *pinned*; el scroll avanza el video o la animación y hace aparecer textos y datos. Ritmo inspirado en aperturas cinematográficas de ciencia ficción: negro, sonido, tipografía grande, silencio antes del despegue. **No se usa material de películas o videojuegos**, solo su ritmo.

Tripulación de 3 (coincide con `config_health.json` → `group_size: 3`): Comandante, Geóloga, Ingeniero de vuelo. Nombres por definir.

| # | Escena | Fecha en pantalla | Visual | Texto ES | Texto EN | Dato visible | Recurso |
|---|---|---|---|---|---|---|---|
| 1 | **Gancho** | — | Negro. Respiración dentro del casco. Una línea de texto. | Para caminar en Marte, primero hay que dejar la Tierra. | To walk on Mars, you first have to leave Earth. | — | Audio ambiente |
| 2 | **Plataforma** | 14 ABR 2033 · 06:12 EDT · Kennedy Space Center | Cohete en plataforma al amanecer, vapor. Cuenta regresiva ligada al scroll. | Ventana de lanzamiento: se abre cada 26 meses. Hoy es el día. | Launch window: it opens every 26 months. Today is the day. | T−10 → T−0 | Video real de lanzamiento NASA |
| 3 | **Despegue** | T+00:00:08 | El scroll "frota" el video del despegue. HUD mínimo con altitud y velocidad. | 3 tripulantes. 1 destino. | 3 crew. 1 destination. | Altitud km · velocidad km/h (decorativos) | Video NASA |
| 4 | **La Tierra se aleja** | T+3 días | La Tierra en ventana de la nave, cada vez más pequeña. Presentación de la tripulación (tarjetas). | Comandante. Geóloga. Ingeniero. Sus cuerpos son parte de la misión. | Commander. Geologist. Engineer. Their bodies are part of the mission. | Masa corporal, edad, condición (de `config_health.json`) | Imagen/video de la Tierra desde Orion (NASA) |
| 5 | **Tránsito** | 14 ABR → 10 NOV 2033 | Diagrama animado de la órbita de transferencia Tierra → Marte con contador de días. | 210 días. Unos 470 millones de kilómetros. Sin vuelta atrás. | 210 days. About 470 million kilometers. No turning back. | Días · distancia recorrida | Animación en código (SVG/Three.js) |
| 6 | **Marte crece** | 10 NOV 2033 · Inserción orbital | Marte ocupa la pantalla. Aparecen capas: topografía (MOLA), imagen (CTX), minerales (CRISM), temperatura (THEMIS). | Antes de pisarlo, lo estudiamos desde órbita. | Before setting foot, we study it from orbit. | Nombre y resolución de cada capa | Imágenes NASA/JPL + render del DEM del proyecto |
| 7 | **Siete minutos** | 12 NOV 2033 · 14:31 hora de Marte | Entrada, paracaídas, descenso. Velocidad bajando con el scroll. | De 20,000 km/h a cero en siete minutos. Sin ayuda desde la Tierra. | From 20,000 km/h to zero in seven minutes. No help from Earth. | Velocidad · altitud · temperatura del escudo | Video real del descenso de Perseverance (NASA/JPL-Caltech, 2021) |
| 8 | **Jezero** | Sol 1 · 18.4° N, 77.6° E | Polvo que se asienta. La cámara baja al terreno 3D **real** del proyecto (transición al motor Three.js). | Cráter Jezero. Hace 3,500 millones de años aquí hubo un lago. | Jezero crater. 3.5 billion years ago there was a lake here. | −63 °C · 7.4 hPa · gravedad 38 % (de `state.weather`) | Motor 3D del proyecto |
| 9 | **Tu turno** | Sol 1 · EVA-01 | El astronauta aparece frente al hábitat, Perseverance e Ingenuity. | El oxígeno de tu traje dura unas horas. Cada paso cuesta. ¿Listo? | Your suit's oxygen lasts a few hours. Every step has a cost. Ready? | O₂ 100 % · autonomía | Motor 3D + botón "Comenzar EVA / Begin EVA" |

Notas del guion:
- La escena 8 es el puente: la historia termina **dentro** del simulador, no en una pantalla aparte. Esto da continuidad y presume el terreno real.
- La cinemática actual (`cinematic.js`, "T+142 días") se reemplaza por este guion; se puede reciclar su lógica de canvas para la escena 5.
- Fechas ancla reales: el aterrizaje de Perseverance en Jezero fue el 18 feb 2021 y puede citarse en la escena 8 ("donde aterrizó Perseverance en 2021").

## 7. Escena 10 · Briefing de misión

Una pantalla, tres decisiones, con valores por defecto:

1. **¿Cuánto detalle quieres ver? / How much detail?** Explorador · Misión · Astronauta (con una línea de descripción y una vista previa del HUD de cada uno).
2. **¿Caminas solo o en equipo? / Solo or team?** (mapea a `healthMode`).
3. **Objetivo de la EVA / EVA goal:** Explorar libre · Recolectar 3 muestras (travesía científica) · Volver al hábitat antes de que se acabe el O₂.

Luego un tutorial de 3 pasos superpuesto (moverse, mirar el O₂, presionar `E`).

## 8. Simulador reorganizado

**Principio:** el mapa/terreno es el protagonista; la UI se esconde hasta que se necesita.

| Zona | Vista orbital | 1ª persona |
|---|---|---|
| Barra superior | Logo · nombre de misión · Sol/hora de Marte · selector de nivel · idioma · menú | Oculta |
| Izquierda | **Planificar ruta** (colapsable): elegir A/B, estilo de ruta, métricas, perfil | — |
| Derecha | **Capas** y **Entorno** como pestañas colapsables | — |
| Abajo | Dock del astronauta + botón grande "Bajar a la superficie" | HUD de soporte vital (según nivel) |
| Esquina inferior derecha | — | Brújula + minimapa |
| Centro | — | Retícula, aviso `[E]`, alerta prioritaria |
| Flotante | Copiloto ARES (botón, abre panel) | Transmisión de radio |

HUD en 1ª persona por nivel:
- **N1:** anillo de O₂ con tiempo restante · estado (Bien/Atención/Peligro) · indicador de terreno · distancia al objetivo.
- **N2:** + pulso, temperatura corporal, hidratación, velocidad, elevación, clima.
- **N3:** + panel desplegable de telemetría completa (VO₂, VCO₂, W, SV, gasto cardíaco), grupo, comparadores.

Referencia de estilo: `docs/HUD_IDEA.jpeg` (HUD cian sobre fondo oscuro, marcos finos, tipografía condensada).

## 9. Sistema visual

### Color

| Token | Valor | Uso |
|---|---|---|
| `space-950` | `#05070A` | Fondo principal |
| `space-900` | `#0B0D10` | Paneles (ya existe como `--bg`) |
| `space-800` | `#141A21` | Tarjetas |
| `line` | `rgba(255,255,255,0.12)` | Bordes |
| `text-primary` | `#E8EAED` | Texto |
| `text-muted` | `#98A2AD` | Texto secundario |
| `mars-500` | `#FF6A3D` | Acento principal, marca, CTA (ya existe como `--accent`) |
| `mars-300` | `#FFB08F` | Acento suave |
| `earth-400` | `#4DA3FF` | Escenas de la Tierra |
| `hud-cyan` | `#66FCF1` | HUD y datos en vivo (ya existe) |
| `ok` | `#55F29B` | Estado bien |
| `caution` | `#F6C945` | Estado atención |
| `warning` | `#FF3855` | Estado peligro |

La paleta "viaja" con la historia: azul Tierra (escenas 1–4) → neutro espacio (5) → óxido Marte (6–9).

### Tipografía (Google Fonts, gratuitas)

| Rol | Fuente | Ejemplo |
|---|---|---|
| Display / títulos de escena | **Space Grotesk** 600–700 | "SIETE MINUTOS" |
| Texto e interfaz | **Inter** 400–600 | Paneles, botones |
| Telemetría y fechas | **JetBrains Mono** 400–500 | `14 ABR 2033 · T−00:00:10` |

Escala: 12 · 14 · 16 · 20 · 24 · 32 · 48 · 72 · 96 px.

### Iconos

Sustituir emojis por un set lineal consistente (Lucide o Phosphor, licencia libre): oxígeno, corazón, termómetro, gota, pendiente, ruta, capa, bandera, refugio, muestra.

### Movimiento

- Transiciones de UI: 200–300 ms, ease-out.
- Scrollytelling: animaciones ligadas al scroll, no por tiempo.
- `prefers-reduced-motion`: sustituir video por imagen fija y fundidos simples.

## 10. Estructura propuesta del archivo de Figma

```
📄 00 Cover
📄 01 Foundations       Colores, tipografía, espaciado (8 px), radios, sombras, iconos — como Variables
📄 02 Components        Botón, chip, toggle, slider, tarjeta métrica (N1/N2/N3), anillo O₂, alerta,
                        tarjeta tripulante, panel colapsable, tooltip "¿qué significa?", selector de idioma
📄 03 Storytelling      Escenas 0–9 · Desktop 1440×900 y Mobile 390×844 · un frame por "estado de scroll"
📄 04 Briefing          Escena 10 + tutorial
📄 05 Simulator         Orbital y 1ª persona × N1/N2/N3 × desktop/mobile; estados de alerta y tormenta
📄 06 Prototype         Flujo enlazado para presentar
📄 99 Archive           Capturas de la UI actual (antes/después)
```

Todos los textos con variantes ES/EN (modo de variable "Idioma" en Figma) para revisar ambos idiomas.

## 11. Videos e imágenes (uso legal)

| Fuente | Qué hay | Licencia / condición |
|---|---|---|
| NASA Image and Video Library (images.nasa.gov) | Lanzamientos, Tierra desde órbita, Marte, descenso de Perseverance | Generalmente sin derechos de autor; acreditar "NASA" o "NASA/JPL-Caltech". **No usar el logo de la NASA** ni sugerir respaldo. |
| NASA Scientific Visualization Studio (svs.gsfc.nasa.gov) | Animaciones de órbitas, Tierra, Marte | Igual que arriba; revisar créditos de cada pieza. |
| ESA | Imágenes de Mars Express | Muchas en CC BY-SA 3.0 IGO: atribución y misma licencia. Revisar caso por caso. |
| Pexels / Pixabay | Ambientación (humo, polvo, estrellas) | Uso libre sin atribución obligatoria. |
| Generado en código | Campo de estrellas, órbita de transferencia, capas sobre el DEM | Propio. |

No se pueden usar clips de *Dead Space* ni de *The Fantastic Four: First Steps*; se toma solo la inspiración de ritmo y tono.

Formato técnico recomendado: video H.264/WebM de 1080p a ≤ 6 Mbps, con versión 720p para móvil; para "frotar" con el scroll, exportar con un keyframe por frame (`-g 1`) o usar secuencias de imágenes WebP.

## 12. Internacionalización

- Archivos `src/i18n/es.json` y `src/i18n/en.json`; función `t('hud.oxygen')`.
- Formatos con `Intl.NumberFormat` y `Intl.DateTimeFormat` (coma vs punto decimal, fechas).
- Unidades métricas en ambos idiomas.
- `<html lang>` dinámico para lectores de pantalla.

## 13. Implementación sugerida (después de Figma)

| Pieza | Herramienta |
|---|---|
| Scrollytelling | GSAP + ScrollTrigger (gratuito) o CSS scroll-driven animations con respaldo |
| Video ligado al scroll | `video.currentTime` desde ScrollTrigger, o secuencia de imágenes en `<canvas>` |
| Transición al 3D | Reutilizar `scene.js`/`terrain.js`; la escena 8 anima la cámara existente |
| UI del simulador | Mantener JS sin framework o migrar paneles a componentes web; separar CSS por componente |

## 14. Siguientes pasos

1. Validar este guion (nombres de tripulación, fechas, tono).
2. Conectar Figma y crear el archivo con la estructura de la sección 10.
3. Construir Foundations y Components primero; luego escenas y simulador.
4. Reunir y descargar los videos de la NASA para escenas 2, 3, 4 y 7.
5. Refactor previo en código: i18n y división de `terrain.js` / `styles.css`.
