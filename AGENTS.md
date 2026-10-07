# TechRepair Pereira — landing page

Contexto permanente del proyecto. Este archivo se carga solo en cada sesión de
opencode: leyelo antes de tocar nada y no repitas preguntas ya respondidas.

## Qué es

Landing page de una sola página (un único `index.html`) para un taller de
reparación de portátiles y Mac en Pereira, Colombia. Objetivo de la página:
conversión directa a WhatsApp. Sin formularios, sin fricción.

- GitHub: `github.com/geo8610/techreparacion-portatiles` (rama `main`)
- Producción: https://reparacionportatiles.vercel.app
- Cuenta Vercel: `geo8610-9727`

## Identidad del negocio (NO cambiar sin que lo pida)

- Marca: **TechRepair**
- Phone: `301 443 3043` → `phoneDigits: '573014433043'` (WhatsApp: https://wa.me/573014433043)
- Email: `geo8610@gmail.com`
- Local: Centro Comercial Santa Catalina, Pereira, Risaralda
- Horario: L–V 8am–6pm, Sáb 8am–4pm, Dom cerrado
- Cobertura: Pereira, Dosquebradas, Santa Rosa de Cabal, Eje Cafetero
- Posicionamiento clave: **ingeniero electrónico certificado por Apple, más de
  12 años de experiencia**. Mantenimiento real, hardware y placa, garantía por
  escrito. El hero debe seguir mencionando el mantenimiento.
- Precios en COP, siempre "Desde $X": mantenimiento 70.000 · pantalla 180.000 ·
  batería 95.000 · teclado/líquido 120.000 · SSD 140.000 · placa 180.000

## Stack

No hay build. No hay dependencias. No hay framework.

- `index.html` monolítico (~42 KB, 727 líneas): HTML + `<script>` con un objeto
  `CONFIG` (línea ~139) que guarda **todo** el copy, precios, servicios,
  síntomas y contacto; el HTML de cada sección se genera con template strings.
- Tailwind por CDN (`https://cdn.tailwindcss.com`) con `tailwind.config` inline.
  Colores custom: `ink` (950 `#0A0A0B` … 700), `accent` `#22D3A5`, `wasa`
  `#25D366` (WhatsApp).
- Iconos SVG inline en el objeto `ICONS`.
- Fuente: system stack + `font-sans`.
- Todos los textos visibles salen de `CONFIG`. **Para cambiar copy, edita
  `CONFIG`, no el HTML generado.**

## Estructura de secciones

| id | Contenido |
| --- | --- |
| `#header` | Nav fijo, CTA "Escríbenos" |
| `#inicio` | Hero + badge "Pereira · Diagnóstico en el día", trust (3), bloque `hero.maintenance` |
| `#sintomas` | 6 fallos frecuentes; cada botón abre WhatsApp con el mensaje precargado |
| `#servicios` | 6 tarjetas de servicio con precio, tiempo y bullets |
| `#proceso` | 3 pasos (traer → diagnóstico → reparación/entrega) |
| `#contacto` | CTA final + datos + mapa (embed OpenStreetMap) |
| footer | tagline, servicios, contacto, legal |

Extras en `CONFIG`: `why` (4 diferenciadores). Utilidades al final del script:
`IntersectionObserver` para `data-reveal`, `floaty`/`orb-float`/`shimmer`/
`battery-pulse` (respetan `prefers-reduced-motion`).

## Deploy

El proyecto está enlazado a GitHub en Vercel (rama `main`), así que:

```bash
git add . && git commit -m "..." && git push   # despliega solo a producción
```

Solo para deploy manual: `npx vercel --prod`. Deployment Protection ya está
**desactivado** (la página es pública); si algún día sale un login de Vercel al
visitar la URL, es que se reactivó.

## Gotchas conocidos

- Los meta tags (`canonical`, `og:url`, `og:image`, `twitter:image`) apuntan a
  `https://techreparacionportatiles.vercel.app/`, que es un dominio inventado
  en una sesión temprana. Si se cambia el dominio real hay que actualizar esos
  meta tags y volver a desplegar.
- `og.png` (1200×630) vive en la raíz del repo y sí se sirve.
- `.vercel/` está en `.gitignore` a propósito: es config local de link.
- El MCP `vercel` está configurado en `~/.config/opencode/opencode.jsonc`
  (remote `https://mcp.vercel.com`) y ya está autenticado. El MCP `n8n` de la
  misma config **falla por timeout**, es ruido, no afecta a nada.
- `code` no está en el PATH de la terminal; para abrir VS Code se usó
  `open -a "Visual Studio Code" index.html`.
- Extensiones de VSCode instaladas para el flujo de trabajo: **Live Server**
  y **Live Preview** (Microsoft, id `ms-vscode.live-server`). Live Preview está
  configurado con preview embebido + recarga automática al guardar.

## Cómo trabajar aquí

1. Editar `index.html` (preferentemente el bloque `CONFIG`).
2. El usuario revisa en la vista previa de VS Code (Live Preview recarga solo).
3. Commit + push para publicar.
4. No commitear ni pushear sin que lo pida explícitamente.
5. Respuestas en español. Tono directo, sin rodeos ni emojis.