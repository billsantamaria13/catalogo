/*
  EDITA AQUÍ TUS DATOS.
  1) Cambia WHATSAPP_NUMBER por tu número con indicativo de país, sin + ni espacios.
     Ejemplo Colombia: 573001112233
  2) Cambia logoUrl por tu logo. Puedes usar "logo-cybershop.png" en la raíz del repo o una URL RAW de GitHub.
  3) Modifica precios, nombres, imágenes y categorías en PRODUCTOS.
  4) Las imágenes pueden estar en GitHub usando el enlace RAW o en cualquier URL pública.
*/

const LOGO_BASE_URL = "https://raw.githubusercontent.com/billsantamaria13/catalogo/main/logos/";

const appLogos = [
  { nombre: "Amazon Prime", archivo: "Amazon.png" },
  { nombre: "Canva", archivo: "Canva.png" },
  { nombre: "CapCut", archivo: "Capcut.png" },
  { nombre: "Crunchyroll", archivo: "Crunchyr.png" },
  { nombre: "Disney+", archivo: "Disney.png" },
  { nombre: "Gemini", archivo: "GEmini.png" },
  { nombre: "ChatGPT", archivo: "GPT.png" },
  { nombre: "HBO Max", archivo: "HBO.png" },
  { nombre: "IPTV", archivo: "IPTV.png" },
  { nombre: "Netflix", archivo: "Netflix.png" },
  { nombre: "Paramount+", archivo: "Paramount.png" },
  { nombre: "Plex", archivo: "Plex.png" },
  { nombre: "Spotify", archivo: "Spotify.png" },
  { nombre: "Vix", archivo: "Vix.png" },
  { nombre: "YouTube", archivo: "Youtube.png" },
];

const CONFIG = {
  tienda: "CyberShop",
  whatsappNumber: "573505267000",
  logoUrl: "logo-cybershop.png", // Puedes cambiarlo por una URL RAW de GitHub.
  logosStripUrl: "logos-cybershop-transparente.png", // Imagen grande de logos que aparece arriba del catálogo.
  mensajeAyuda: "Hola estoy interesado en conocer las ofertas de CyberShop.",
};

const IMAGENES = {
  Streaming: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?q=80&w=1200&auto=format&fit=crop",
  Musica: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop",
  Diseno: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1200&auto=format&fit=crop",
  IPTV: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1200&auto=format&fit=crop",
  Gaming: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  IA: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
  Ofertas: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1200&auto=format&fit=crop",
};

const PRODUCTOS = [
  { nombre: "🔴 Netflix", categoria: "Streaming", precio: "15.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🔴 Netflix Privado", categoria: "Streaming", precio: "21.900", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🟣 Disney + Star ESPN", categoria: "Streaming", precio: "14.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🔵 Amazon Prime Video", categoria: "Streaming", precio: "8.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "⚫ HBO MAX", categoria: "Streaming", precio: "9.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🉐 IPTV Win+ 3000 Canales", categoria: "IPTV", precio: "15.000", imagen: IMAGENES.IPTV, destacado: false, stockLimitado: false },
  { nombre: "🟡 Plex", categoria: "Streaming", precio: "15.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🟠 Crunchyroll", categoria: "Streaming", precio: "9.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🔵 Paramount", categoria: "Streaming", precio: "9.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🟠 Vix", categoria: "Streaming", precio: "8.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🟢 Spotify 1 Mes", categoria: "Música", precio: "12.000", imagen: IMAGENES.Musica, destacado: false, stockLimitado: false },
  { nombre: "🟢 Spotify 3 Meses", categoria: "Música", precio: "33.000", imagen: IMAGENES.Musica, destacado: false, stockLimitado: false },
  { nombre: "⭕ Youtube 1 mes", categoria: "Streaming", precio: "12.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "⭕ Youtube 3 meses", categoria: "Streaming", precio: "33.000", imagen: IMAGENES.Streaming, destacado: false, stockLimitado: false },
  { nombre: "🟡 Canva Pro 1 mes", categoria: "Diseño", precio: "10.000", imagen: IMAGENES.Diseno, destacado: false, stockLimitado: false },
  { nombre: "🟡 Canva Pro 3 meses", categoria: "Diseño", precio: "25.000", imagen: IMAGENES.Diseno, destacado: false, stockLimitado: false },
  { nombre: "🟣 CapCut Pro 1 Mes", categoria: "Diseño", precio: "25.000", imagen: IMAGENES.Diseno, destacado: false, stockLimitado: false },
  { nombre: "🟠 Office 365 1 Mes", categoria: "Diseño", precio: "10.000", imagen: IMAGENES.Diseno, destacado: false, stockLimitado: false },
  { nombre: "🟠 Office 365 12 Meses", categoria: "Diseño", precio: "99.000", imagen: IMAGENES.Diseno, destacado: false, stockLimitado: false },
  { nombre: "🎮 Xbox Game Pass Ultimate 1 Mes", categoria: "Gaming", precio: "35.000", imagen: IMAGENES.Gaming, destacado: false, stockLimitado: false },
  { nombre: "🤖 Chat GPT Plus 1 Mes", categoria: "IA", precio: "35.000", imagen: IMAGENES.IA, destacado: false, stockLimitado: false },
  { nombre: "🤖 Chat GPT Plus 3 Meses", categoria: "IA", precio: "90.000", imagen: IMAGENES.IA, destacado: false, stockLimitado: false },
  { nombre: "🤖 Perplexity AI Pro 1 Mes", categoria: "IA", precio: "30.000", imagen: IMAGENES.IA, destacado: false, stockLimitado: false },
  { nombre: "🤖 Gemini Ai Pro con VEO 1 Mes", categoria: "IA", precio: "40.000", imagen: IMAGENES.IA, destacado: false, stockLimitado: false },

  { nombre: "🉐 IPTV Canales Deportivos 3 Meses", categoria: "Ofertas", precio: "30.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🟢 Spotify 4 Meses", categoria: "Ofertas", precio: "40.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🎮 Xbox Game Pass Ultimate 2 Meses", categoria: "Ofertas", precio: "55.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🤖 Google Gemini Ai Pro 3 Meses", categoria: "Ofertas", precio: "90.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🤖 Google Gemini Ai Pro 12 Meses", categoria: "Ofertas", precio: "250.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🔵 Amazon Prime Video 6 Meses", categoria: "Ofertas", precio: "25.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "⚫ HBO MAX 3 Meses", categoria: "Ofertas", precio: "25.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🟠 Crunchyroll 3 Meses", categoria: "Ofertas", precio: "20.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🟠 Office 365 12 Meses", categoria: "Ofertas", precio: "80.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🟣 CapCut Pro 3 Meses", categoria: "Ofertas", precio: "50.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
  { nombre: "🟠 Vix 3 Meses", categoria: "Ofertas", precio: "15.000", imagen: IMAGENES.Ofertas, destacado: true, stockLimitado: false },
];
