# CyberShop Catálogo

Web estática de una sola página para `compras.cybershop.lat`.

## Archivos importantes

- `index.html`: estructura de la página.
- `styles.css`: diseño, tarjetas y fondo neon animado.
- `productos.js`: productos, precios, imágenes, WhatsApp y logo.
- `app.js`: funcionamiento del catálogo y mensajes de WhatsApp.
- `CNAME`: dominio personalizado `compras.cybershop.lat`.

## Cambiar WhatsApp

En `productos.js`, cambia:

```js
whatsappNumber: "57TU_NUMERO_AQUI",
```

Por tu número real con indicativo, sin `+`, espacios ni guiones.

Ejemplo:

```js
whatsappNumber: "573001112233",
```

## Cambiar logo

En `productos.js` aparece:

```js
logoUrl: "logo-cybershop.jpeg",
```

Tienes dos opciones:

1. Subir una imagen llamada exactamente `logo-cybershop.jpeg` a la raíz del repositorio, al lado de `index.html`.
2. Cambiar ese valor por una URL RAW de GitHub, por ejemplo:

```js
logoUrl: "https://raw.githubusercontent.com/USUARIO/REPO/main/logo-cybershop.jpeg",
```

## Editar productos y precios

En `productos.js`, edita cada bloque:

```js
{
  nombre: "Netflix + Prime",
  categoria: "Combos",
  precio: "18.000",
  precioAnterior: "25.000",
  imagen: "https://raw.githubusercontent.com/USUARIO/REPO/main/imagen.png",
  destacado: true,
  stockLimitado: true,
}
```

El mensaje de compra queda así:

```txt
Hola estoy interesado en Netflix + Prime por valor de $18.000.
```


## Logo
El logo debe estar en la raíz del repositorio con el nombre exacto: `logo-cybershop.png`.
No lo pongas dentro de carpetas.
