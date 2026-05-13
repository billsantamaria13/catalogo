# CyberShop Catálogo

Archivos principales:

- `index.html`: estructura de la página.
- `styles.css`: diseño visual.
- `productos.js`: productos, precios, WhatsApp, logos y configuración.
- `app.js`: lógica del catálogo, filtros, buscador y WhatsApp.
- `CNAME`: dominio personalizado para GitHub Pages.

## Importante

La carpeta `logos` ya debe existir en GitHub con tus logos individuales.

Rutas usadas por los productos:

```text
logos/Amazon.png
logos/Canva.png
logos/Capcut.png
logos/Crunchyr.png
logos/Disney.png
logos/Gemini.png
logos/GPT.png
logos/HBO.png
logos/IPTV.png
logos/Netflix.png
logos/Paramount.png
logos/Plex.png
logos/Spotify.png
logos/Vix.png
logos/Youtube.png
logos/Office.png
logos/Xbox.png
logos/Perplexity.png
```

Si no tienes `Office.png`, `Xbox.png` o `Perplexity.png`, sube esos archivos o cambia la ruta en `productos.js`.

## Cambiar WhatsApp

En `productos.js`, cambia:

```js
whatsappNumber: "57TU_NUMERO_AQUI",
```

por tu número real con indicativo de país.
