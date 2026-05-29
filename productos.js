/*
  CYBERSHOP - PRODUCTOS, PRECIOS Y DESCUENTOS

  REGLA DEL CARRITO:
  - Si el cliente agrega 1 solo producto: usa precio normal.
  - Si agrega 2 o más productos: cada producto usa precioCombo.

  Cambia whatsappNumber por tu número con indicativo de país, sin + ni espacios.
*/

window.CONFIG = {
  tienda: "CyberShop",
  whatsappNumber: "573505267000",
  logoUrl: "logo-cybershop.png",
  logosStripUrl: "logos-cybershop-transparente.png",
  mensajeBase: "Hola estoy interesado en comprar este combo:",
};

window.productos = [
  { nombre: "Netflix", categoria: "Streaming", precio: 15000, precioCombo: 13000, precioAnterior: 20000, logo: "./logos/Netflix.png", destacado: true },
  { nombre: "Netflix Privado", categoria: "Streaming", precio: 21900, precioCombo: 20900, precioAnterior: 28000, logo: "./logos/Netflix.png", destacado: true },
  { nombre: "Disney + Star ESPN", categoria: "Streaming", precio: 14000, precioCombo: 12000, precioAnterior: 20000, logo: "./logos/Disney.png", destacado: true },
  { nombre: "Amazon Prime Video", categoria: "Streaming", precio: 8000, precioCombo: 6000, precioAnterior: 12000, logo: "./logos/Amazon.png", destacado: true },
  { nombre: "HBO MAX", categoria: "Streaming", precio: 10000, precioCombo: 9000, precioAnterior: 15000, logo: "./logos/HBO.png", destacado: true },
  { nombre: "IPTV Win+ 3000 Canales", categoria: "IPTV", precio: 15000, precioCombo: 12000, precioAnterior: 22000, logo: "./logos/IPTV.png", destacado: true },
  { nombre: "Plex", categoria: "Streaming", precio: 15000, precioCombo: 12000, precioAnterior: 20000, logo: "./logos/Plex.png", destacado: true },
  { nombre: "Crunchyroll", categoria: "Streaming", precio: 9000, precioCombo: 7000, precioAnterior: 14000, logo: "./logos/Crunchyr.png", destacado: true },
  { nombre: "Paramount", categoria: "Streaming", precio: 9000, precioCombo: 7000, precioAnterior: 14000, logo: "./logos/Paramount.png", destacado: true },
  { nombre: "Vix", categoria: "Streaming", precio: 8000, precioCombo: 6000, precioAnterior: 12000, logo: "./logos/Vix.png", destacado: true },
  { nombre: "Apple TV", categoria: "Streaming", precio: 12000, precioCombo: 10000, precioAnterior: 18000, logo: "./logos/Apple.png", destacado: true },

  { nombre: "Spotify 1 Mes", categoria: "Música", precio: 12000, precioCombo: 10000, precioAnterior: 18000, logo: "./logos/Spotify.png", destacado: true },
  { nombre: "Spotify 3 Meses", categoria: "Música", precio: 33000, precioCombo: 28000, precioAnterior: 45000, logo: "./logos/Spotify.png", destacado: true },

  { nombre: "Youtube 1 Mes", categoria: "Streaming", precio: 12000, precioCombo: 10000, precioAnterior: 18000, logo: "./logos/Youtube.png", destacado: true },
  { nombre: "Youtube 3 Meses", categoria: "Streaming", precio: 33000, precioCombo: 28000, precioAnterior: 45000, logo: "./logos/Youtube.png", destacado: true },

  { nombre: "Canva Pro 1 Mes", categoria: "Diseño", precio: 10000, precioCombo: 8000, precioAnterior: 15000, logo: "./logos/Canva.png", destacado: true },
  { nombre: "Canva Pro 3 Meses", categoria: "Diseño", precio: 25000, precioCombo: 8000, precioAnterior: 35000, logo: "./logos/Canva.png", destacado: true },

  { nombre: "CapCut Pro 1 Mes", categoria: "Diseño", precio: 25000, precioCombo: 20000, precioAnterior: 35000, logo: "./logos/Capcut.png", destacado: true },

  { nombre: "Office 365 1 Mes", categoria: "Productividad", precio: 10000, precioCombo: 8000, precioAnterior: 15000, logo: "./logos/Office.png", destacado: true },
  { nombre: "Office 365 12 Meses", categoria: "Productividad", precio: 99000, precioCombo: 80000, precioAnterior: 130000, logo: "./logos/Office.png", destacado: true },

  { nombre: "Xbox Game Pass Ultimate 1 Mes", categoria: "Gaming", precio: 35000, precioCombo: 30000, precioAnterior: 45000, logo: "./logos/Xbox.png", destacado: true },

  { nombre: "Chat GPT Plus 1 Mes", categoria: "IA", precio: 35000, precioCombo: 30000, precioAnterior: 45000, logo: "./logos/GPT.png", destacado: true },
  { nombre: "Chat GPT Plus 3 Meses", categoria: "IA", precio: 90000, precioCombo: 30000, precioAnterior: 120000, logo: "./logos/GPT.png", destacado: true },
  { nombre: "Perplexity AI Pro 1 Mes", categoria: "IA", precio: 30000, precioCombo: 25000, precioAnterior: 40000, logo: "./logos/GPT.png", destacado: true },
  { nombre: "Gemini AI Pro con VEO 1 Mes", categoria: "IA", precio: 40000, precioCombo: 30000, precioAnterior: 55000, logo: "./logos/Gemini.png", destacado: true },

  // OFERTAS
  { nombre: "IPTV Canales Deportivos 3 Meses", categoria: "Ofertas", precio: 30000, precioCombo: 30000, precioAnterior: 45000, logo: "./logos/IPTV.png", destacado: true, stockLimitado: true },
  { nombre: "Spotify 4 Meses", categoria: "Ofertas", precio: 40000, precioCombo: 40000, precioAnterior: 55000, logo: "./logos/Spotify.png", destacado: true, stockLimitado: true },
  { nombre: "Xbox Game Pass Ultimate 2 Meses", categoria: "Ofertas", precio: 55000, precioCombo: 55000, precioAnterior: 70000, logo: "./logos/Xbox.png", destacado: true, stockLimitado: true },
  { nombre: "Google Gemini AI Pro 3 Meses", categoria: "Ofertas", precio: 90000, precioCombo: 90000, precioAnterior: 120000, logo: "./logos/Gemini.png", destacado: true, stockLimitado: true },
  { nombre: "Google Gemini AI Pro 12 Meses", categoria: "Ofertas", precio: 250000, precioCombo: 250000, precioAnterior: 320000, logo: "./logos/Gemini.png", destacado: true, stockLimitado: true },
  { nombre: "Amazon Prime Video 6 Meses", categoria: "Ofertas", precio: 25000, precioCombo: 25000, precioAnterior: 48000, logo: "./logos/Amazon.png", destacado: true, stockLimitado: true },
  { nombre: "HBO MAX 3 Meses", categoria: "Ofertas", precio: 25000, precioCombo: 25000, precioAnterior: 40000, logo: "./logos/HBO.png", destacado: true, stockLimitado: true },
  { nombre: "Crunchyroll 3 Meses", categoria: "Ofertas", precio: 20000, precioCombo: 20000, precioAnterior: 30000, logo: "./logos/Crunchyr.png", destacado: true, stockLimitado: true },
  { nombre: "Office 365 12 Meses Oferta", categoria: "Ofertas", precio: 80000, precioCombo: 80000, precioAnterior: 99000, logo: "./logos/Office.png", destacado: true, stockLimitado: true },
  { nombre: "CapCut Pro 3 Meses", categoria: "Ofertas", precio: 50000, precioCombo: 50000, precioAnterior: 75000, logo: "./logos/Capcut.png", destacado: true, stockLimitado: true },
  { nombre: "Vix 3 Meses", categoria: "Ofertas", precio: 15000, precioCombo: 15000, precioAnterior: 24000, logo: "./logos/Vix.png", destacado: true, stockLimitado: true },
];
