# Tarjeta Open Graph

Fuente de `public/images/og-image.jpg`: la imagen que aparece cuando alguien comparte el
portafolio en WhatsApp, LinkedIn o Twitter.

**No se usa en el sitio.** Es una plantilla de diseño, no una página: vive acá para poder
regenerar la imagen sin rediseñarla desde cero.

## Generar la imagen

```bash
# 1. Renderizar la tarjeta a PNG (1200x630)
#    Con Playwright:
#      await page.setViewportSize({ width: 1200, height: 630 });
#      await page.goto('file://<ruta absoluta>/design/og-card/og-card.html');
#      await page.evaluate(() => document.fonts.ready);
#      await page.screenshot({ path: '/tmp/og-card.png' });

# 2. Convertir a JPG optimizado (sharp ya viene con Astro)
node -e "require('sharp')('/tmp/og-card.png').jpeg({quality:88,mozjpeg:true,chromaSubsampling:'4:4:4'}).toFile('public/images/og-image.jpg').then(async i => console.log((i.size/1024).toFixed(1)+' KB'))"

# 3. Verificar: tiene que dar 1200x630 y ~56 KB
```

La plantilla importa Orbitron desde Google Fonts, así que el render necesita conexión.
Si la fuente no carga, el nombre sale con una sans genérica: verificar con
`document.fonts.check('900 100px Orbitron')` antes de la captura.

## Si hay que cambiar algo

| Qué               | Dónde                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| El rol            | `.role` acá **y** `og:image:alt` / `twitter:image:alt` en `src/layouts/Layout.astro`                                                                                                                          |
| El nombre         | `.name` (Orbitron 900, 100px)                                                                                                                                                                                 |
| El stack          | `.stack` (26px; el texto actual es el más largo probado)                                                                                                                                                      |
| Los colores       | `#030712` fondo · `#60a5fa` rol · `#3b82f6` regla y glow · `#9ca3af` stack · `#4b5563` URL                                                                                                                    |
| El monograma      | `.mono` (caja 104x104, borde `rgba(148,163,184,0.28)`, Orbitron 700 a 46px)                                                                                                                                   |
| Versión en inglés | `og:image` es una sola imagen para los dos idiomas. Si hace falta, generar `og-image-en.jpg` y pasar `image="/images/og-image-en.jpg"` desde `src/pages/en/index.astro` (el Layout ya acepta la prop `image`) |

## Reglas

- **Nada de texto menor a 24px.** En la burbuja de WhatsApp la imagen se ve a ~300px de ancho.
- **1200x630** (1.91:1). Es el formato que esperan WhatsApp, LinkedIn y Twitter.
- **JPG, menos de 600 KB.** El ideal es menos de 300 KB; hoy pesa ~56 KB.
- El rótulo tiene que coincidir con el `og:title` que emite el sitio. Hoy dice
  **"Desarrollador Front End"**, que es lo que el sitio declara. Si la identidad cambia a
  "Desarrollador Web" (ver `openspec/changes/professional-identity/plan.md`), hay que
  regenerar la imagen **y** los `alt` en el mismo commit.

## Verificar después de cambiar

```bash
pnpm build                                                        # la imagen debe copiarse a dist
curl -sI https://danloistovar.vercel.app/images/og-image.jpg      # 200 + content-type: image/jpeg
```

Si WhatsApp sigue mostrando la versión vieja no es un bug: cachea hasta 30 días. Se fuerza
pasando el link por el Sharing Debugger de Facebook o compartiendo con `?v=2` al final.
