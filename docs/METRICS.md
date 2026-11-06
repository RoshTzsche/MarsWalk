# Métricas · Metrics · Marswalk 3D

> Inventario de todas las métricas que el simulador calcula hoy, con unidades, umbrales y la propuesta de **en qué nivel de la interfaz** mostrar cada una. Objetivo: que un astronauta tenga todo visible y que una persona sin formación técnica no se asuste.

## Niveles de detalle propuestos

| Nivel | Nombre ES / EN | Para quién | Regla |
|---|---|---|---|
| **N1** | Explorador / Explorer | Público general, estudiantes | Máximo 4 indicadores. Lenguaje cotidiano ("Oxígeno: 3 h 40 min"). Estado con texto + icono + color. |
| **N2** | Misión / Mission | Entusiastas, docentes, jueces | Signos vitales y entorno con unidades. Gráficas simples. |
| **N3** | Astronauta / Flight | Astronautas, planificadores, investigadores | Todas las variables, valores crudos, modelos, supuestos y comparadores. |

El usuario elige el nivel en el briefing y puede cambiarlo en cualquier momento (interruptor en el HUD). Las **alertas críticas se muestran en todos los niveles**.

## 1. Soporte vital y fisiología (`health.js`, por tripulante)

| Métrica | ES | EN | Variable | Unidad | Umbral / alerta | Nivel |
|---|---|---|---|---|---|---|
| O₂ restante | Oxígeno | Oxygen | `o2_remaining_l` | L | Bajo < 58 L; agotado = 0 | **N1** (como % y tiempo restante) |
| Tiempo de O₂ restante* | Autonomía | Time left | derivado: `o2_remaining_l / o2_rate` | h:min | < 30 min = aviso | **N1** |
| Estado general | Estado | Status | `aggregate.status` | nominal / elevado / bajo O₂ / sobreesfuerzo / crítico | crítico = alerta global | **N1** |
| Frecuencia cardíaca | Pulso | Heart rate | `heart_rate_bpm` | lpm | > 85 % de FC máx (220 − edad) | N2 |
| Temperatura central | Temp. corporal | Core temp | `t_core_c` | °C | Aviso > 38.5; crítico > 39.5 | N2 |
| Deshidratación | Hidratación | Hydration | `dehydration_pct_body_mass` | % masa corporal | Aviso > 2 %; crítico > 4 % | N2 |
| Tasa metabólica | Esfuerzo | Effort | `metabolic_rate_w` | W | > 900 W sostenible | N2 (como barra de esfuerzo) · N3 (W) |
| Fracción de esfuerzo máx. | — | — | `metabolic_fraction_of_max` | 0–1 | > 1 | N3 |
| Consumo de O₂ | VO₂ | VO₂ | `vo2_l_min` | L/min | — | N3 |
| Producción de CO₂ | VCO₂ | VCO₂ | `vco2_l_min` | L/min | — (CO₂ acumulado no modelado) | N3 |
| Volumen sistólico | — | Stroke volume | `stroke_volume_ml` | mL | — | N3 |
| Gasto cardíaco | — | Cardiac output | `cardiac_output_l_min` | L/min | — | N3 |
| Energía acumulada | Energía | Energy | `energy_kj_total` | kJ (mostrar también kcal en N2) | — | N2/N3 |
| O₂ consumido acumulado | — | O₂ used | `o2_consumed_l_total` | L | — | N3 |
| Factor de gravedad aplicado | — | Gravity factor | `gravity_factor_applied` | × | — | N3 |
| Sobrecarga por presión del traje | — | Suit overhead | `pressure_overhead_w` | W | — | N3 |

\* Hoy no se calcula como tal; se propone derivarlo para N1 porque "minutos restantes" se entiende mejor que litros.

**Modo grupo** (`aggregateGroupState`): además, líder actual, número de rotaciones, y qué tripulante es el "limitante" en cada dimensión (`binding_member_*`). N2 muestra las 3 tarjetas de tripulantes con su semáforo; N3 añade medias, máximos y sumas.

## 2. Locomoción y terreno (`state.hud`, `raycast.js`)

| Métrica | ES | EN | Variable | Unidad | Umbral | Nivel |
|---|---|---|---|---|---|---|
| Pendiente local | Inclinación | Slope | `hud.slope_deg` | ° | > 25° crítico | **N1** (como "terreno: fácil / difícil / peligroso") · N2 (°) |
| Velocidad | Velocidad | Speed | `hud.speed_ms` | m/s (N1: km/h) | — | N2 |
| Elevación | Altitud | Elevation | `hud.elev_m` | m (bajo el datum marciano) | — | N2 |
| Flujo de O₂ | Consumo | O₂ rate | `hud.o2Rate_l_h` | L/h | — | N2 |
| Distancia al objetivo | Distancia | Distance | ruta / popup | m o km | — | **N1** |
| Tiempo de EVA | Tiempo de caminata | EVA time | cronómetro HUD | h:min:s | — | N2 |
| Factor de costo por pendiente | — | Slope cost factor | `getSlopeCostFactor` | × (1.0–5.0) | — | N3 |

## 3. Entorno (`state.weather`, `state.solar`)

| Métrica | ES | EN | Variable | Unidad | Nivel |
|---|---|---|---|---|---|
| Temperatura exterior | Temperatura | Temperature | `weather.temp_c` | °C | N1 (solo si hay tormenta) · N2 |
| Presión | Presión | Pressure | `weather.pressure_hpa` | hPa | N2 |
| Viento | Viento | Wind | `weather.wind_ms` | m/s | N2 |
| Opacidad del polvo | Visibilidad | Dust opacity | `weather.dust_tau` | τ | N2 ("visibilidad buena/reducida") · N3 (τ) |
| Índice UV | UV | UV | `weather.uv_level` | categoría | N2 |
| Penalización térmica | — | Thermal penalty | `weather.thermalPenalty` | × | N3 |
| Hora solar local | Hora en Marte | Local solar time | `solar.ltst_h` | h | N2 |
| Fase del día | Día / crepúsculo / noche | Day phase | `solar.phase` | — | N1 (icono) |
| Elevación y acimut solar | — | Sun elevation / azimuth | `solar.elevation_deg`, `azimuth_deg` | ° | N3 |
| Irradiancia en superficie | — | Surface irradiance | `solar.surface_irradiance_wm2` | W/m² | N3 |
| Distancia al Sol, Ls, declinación, masa de aire | — | — | `distance_au`, `ls_deg`, `declination_deg`, `airmass` | AU, °, — | N3 |

## 4. Rutas (`route.json`, `health_route_astar.js`)

| Métrica | ES | EN | Variable | Unidad | Nivel |
|---|---|---|---|---|---|
| Distancia de la ruta | Distancia | Distance | `metrics.distance_m` | km | **N1** |
| O₂ estimado de la ruta | Oxígeno necesario | O₂ needed | `metrics.oxygen_l` | L (N1: % del tanque) | **N1** |
| Pendiente máxima | Tramo más empinado | Max slope | `metrics.max_slope_deg` | ° | N2 |
| Puntuación de riesgo | Riesgo | Risk | `metrics.risk_score` | 0–1 (N1: bajo/medio/alto) | N1/N2 |
| Perfil de elevación | Perfil del camino | Elevation profile | `route-profile-canvas` | m vs km | N2 |
| Comparación A\* vs QAOA | — | A\* vs QAOA | ΔO₂, Δpendiente | L, ° | N3 |
| Comparación clásica vs salud | — | Classic vs health | tabla 7 dimensiones + veredicto | varias | N3 |
| Preset de costo | Tipo de ruta | Route style | `routeCostPreset` | Clásico / Balanceado / Ciencia / Seguridad máxima | N2 (selector con nombres simples) |

## 5. Ciencia

| Métrica | ES | EN | Fuente | Nivel |
|---|---|---|---|---|
| Objetivos completados | Muestras | Samples | `completedPOIs` | N1 |
| Tipo de POI | Muestreo / peligro / refugio | Sampling / hazard / shelter | `poi.json` | N1 |
| Capas CRISM, THEMIS, pendiente, riesgo | Capas | Layers | `state.layers` | N2 (activar/desactivar) · N3 (opacidad, fuentes) |
| Fuente, resolución e incertidumbre del dato | — | Data provenance | `metadata.json` | N3 |

## 6. Lo que el modelo **no** calcula (mostrar como "no modelado" en N3)

Radiación (dosis), contingencias de fuga del traje, CO₂ acumulado del cartucho, fatiga, carga cognitiva, resistencia articular del traje. Está declarado en `DEFAULT_HEALTH.not_modeled`. La dimensión "Radiación" del A\* por salud es un marcador sin modelo. Mostrarlo con honestidad da credibilidad ante jueces y astronautas.

## 7. Reglas de presentación para no asustar

1. **Primero lenguaje, luego número.** N1: "Oxígeno para 3 h 40 min". N3: "412.6 L · 0.79 L/min".
2. **Estados con palabra + icono + color**, nunca solo color: Bien / Atención / Peligro (Nominal / Caution / Warning).
3. **Rojo solo para lo que exige actuar ya.** Ámbar para "vigilar". El resto en neutros.
4. **Una alerta a la vez en N1**, priorizada: O₂ agotado > temperatura crítica > deshidratación crítica > pendiente > sobreesfuerzo.
5. **Unidades siempre visibles en N2/N3**; en N1, unidades cotidianas (km/h, minutos, %).
6. **Tooltip "¿qué significa?"** en cada métrica de N2/N3, con el modelo y la fuente.
