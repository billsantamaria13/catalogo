const grid = document.querySelector("#productsGrid");
const searchInput = document.querySelector("#searchInput");
const categorySelect = document.querySelector("#categorySelect");
const emptyState = document.querySelector("#emptyState");
const topWhatsapp = document.querySelector("#topWhatsapp");
const floatingWhatsapp = document.querySelector("#floatingWhatsapp");
const brandLogo = document.querySelector("#brandLogo");
const logosStrip = document.querySelector("#logosStrip");

let categoriaActiva = "Todos";

function renderAppLogos() {
  const container = document.getElementById("appsLogos");
  if (!container || typeof appLogos === "undefined") return;

  container.innerHTML = appLogos
    .map((logo) => {
      const src = `${LOGO_BASE_URL}${logo.archivo}`;

      return `
        <div class="app-logo-card">
          <img src="${src}" alt="${logo.nombre}" loading="lazy">
        </div>
      `;
    })
    .join("");
}

renderAppLogos();

function formatCOP(valor) {
  return `$${valor}`;
}

function whatsappUrl(mensaje) {
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(mensaje)}`;
}

function mensajeProducto(producto) {
  return `Hola estoy interesado en ${producto.nombre} por valor de ${formatCOP(producto.precio)}.`;
}

function crearCategorias() {
  const categorias = ["Todos", ...new Set(PRODUCTOS.map((p) => p.categoria))];

  categorias.forEach((categoria) => {
    if (categoria !== "Todos") {
      const option = document.createElement("option");
      option.value = categoria;
      option.textContent = categoria;
      categorySelect.appendChild(option);
    }
  });
}

function productoCoincide(producto) {
  const busqueda = searchInput.value.trim().toLowerCase();
  const coincideCategoria = categoriaActiva === "Todos" || producto.categoria === categoriaActiva;
  const texto = `${producto.nombre} ${producto.categoria}`.toLowerCase();
  return coincideCategoria && texto.includes(busqueda);
}

function tarjetaProducto(producto) {
  const card = document.createElement("article");
  card.className = "product-card";

  const badges = [];
  if (producto.destacado) badges.push(`<span class="badge hot">Oferta</span>`);
  if (producto.stockLimitado) badges.push(`<span class="badge stock">Stock limitado</span>`);

  card.innerHTML = `
    <div class="image-wrap">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
      <div class="badges">${badges.join("")}</div>
    </div>
    <div class="product-body">
      <span class="category">${producto.categoria}</span>
      <h3>${producto.nombre}</h3>
      <div class="price-row">
        <div>
          ${producto.precioAnterior ? `<small class="before">Antes ${formatCOP(producto.precioAnterior)}</small>` : ""}
          <strong>${formatCOP(producto.precio)}</strong>
        </div>
        <span class="discount">Oferta</span>
      </div>
      <a class="buy-btn" href="${whatsappUrl(mensajeProducto(producto))}" target="_blank" rel="noopener">
        Comprar
      </a>
    </div>
  `;

  return card;
}

function tituloSeccion(titulo, subtitulo = "") {
  const bloque = document.createElement("div");
  bloque.className = "section-title";
  bloque.innerHTML = `
    <h2>${titulo}</h2>
    ${subtitulo ? `<p>${subtitulo}</p>` : ""}
  `;
  return bloque;
}

function pintarProductos() {
  grid.innerHTML = "";
  const productosFiltrados = PRODUCTOS.filter(productoCoincide);
  const productosNormales = productosFiltrados.filter((producto) => producto.categoria !== "Ofertas");
  const productosOferta = productosFiltrados.filter((producto) => producto.categoria === "Ofertas");

  productosNormales.forEach((producto) => grid.appendChild(tarjetaProducto(producto)));

  if (productosOferta.length) {
    grid.appendChild(tituloSeccion("🔥 Ofertas especiales", "Promociones destacadas por tiempo limitado."));
    productosOferta.forEach((producto) => grid.appendChild(tarjetaProducto(producto)));
  }

  emptyState.style.display = productosFiltrados.length ? "none" : "block";
}

function iniciar() {
  document.title = `${CONFIG.tienda} | Ofertas`;
  brandLogo.src = CONFIG.logoUrl || "logo-cybershop.png";
  brandLogo.onerror = () => { brandLogo.style.display = "none"; };

  if (logosStrip) {
    logosStrip.src = CONFIG.logosStripUrl || "logos-cybershop-transparente.png";
    logosStrip.onerror = () => { logosStrip.style.display = "none"; };
  }

  const ayudaUrl = whatsappUrl(CONFIG.mensajeAyuda);
  topWhatsapp.href = ayudaUrl;
  floatingWhatsapp.href = ayudaUrl;

  crearCategorias();
  pintarProductos();

  searchInput.addEventListener("input", pintarProductos);
  categorySelect.addEventListener("change", (event) => {
    categoriaActiva = event.target.value;
    pintarProductos();
  });
}

iniciar();
