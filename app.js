const state = {
  search: "",
  category: "Todos",
};

const $ = (selector) => document.querySelector(selector);

const formatCOP = (value) => {
  const number = Number(value || 0);
  return `$${number.toLocaleString("es-CO")}`;
};

function mensajeProducto(producto) {
  return `${CONFIG.mensajeBase} ${producto.nombre} por valor de ${formatCOP(producto.precio)}.`;
}

function whatsappUrl(mensaje) {
  const phone = CONFIG.whatsappNumber || "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
}

function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function setBrandAssets() {
  const logo = $("#brandLogo");
  const strip = $("#logosStrip");
  const topWhatsapp = $("#topWhatsapp");

  if (logo && CONFIG.logoUrl) logo.src = CONFIG.logoUrl;
  if (strip && CONFIG.logosStripUrl) strip.src = CONFIG.logosStripUrl;
  if (topWhatsapp) {
    topWhatsapp.href = whatsappUrl("Hola, quiero información sobre los combos y promociones de CyberShop.");
  }

  const year = $("#year");
  if (year) year.textContent = new Date().getFullYear();
}

function buildCategories() {
  const select = $("#categorySelect");
  if (!select) return;

  const categorias = [...new Set(productos.map((p) => p.categoria).filter(Boolean))]
    .filter((cat) => cat !== "Ofertas")
    .sort((a, b) => a.localeCompare(b, "es"));

  select.innerHTML = `<option value="Todos">Todos</option>` + categorias
    .map((cat) => `<option value="${cat}">${cat}</option>`)
    .join("");
}

function filtrarProductos(lista, incluirOfertas = false) {
  const query = normalizar(state.search);

  return lista.filter((producto) => {
    const esOferta = producto.categoria === "Ofertas";
    if (incluirOfertas !== esOferta) return false;

    const coincideCategoria =
      state.category === "Todos" ||
      producto.categoria === state.category ||
      (state.category === "Ofertas" && esOferta);

    const texto = normalizar(`${producto.nombre} ${producto.categoria}`);
    const coincideBusqueda = !query || texto.includes(query);

    return coincideCategoria && coincideBusqueda;
  });
}

function tarjetaProducto(producto) {
  const card = document.createElement("article");
  card.className = "product-card";

  const badges = [];
  if (producto.destacado) badges.push(`<span class="badge hot">Oferta</span>`);
  if (producto.stockLimitado) badges.push(`<span class="badge stock">Limitado</span>`);

  const logo = producto.logo || "./logos/Netflix.png";
  const mensaje = mensajeProducto(producto);

  card.innerHTML = `
    <div class="image-wrap">
      <img 
        class="product-logo-img"
        src="${logo}" 
        alt="${producto.nombre}" 
        loading="lazy"
        onerror="this.onerror=null; this.src='./logo-cybershop.png';"
      >
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
      </div>

      <a class="buy-btn" href="${whatsappUrl(mensaje)}" target="_blank" rel="noopener">
        Comprar
      </a>
    </div>
  `;

  return card;
}

function renderProductos() {
  const grid = $("#productsGrid");
  const offersGrid = $("#offersGrid");
  const offersSection = $("#offersSection");

  if (!grid || !offersGrid || !offersSection) return;

  const normales = filtrarProductos(productos, false);
  const ofertas = filtrarProductos(productos, true);

  grid.innerHTML = "";
  offersGrid.innerHTML = "";

  if (normales.length === 0) {
    grid.innerHTML = `<p class="empty">No encontramos productos con ese filtro.</p>`;
  } else {
    normales.forEach((producto) => grid.appendChild(tarjetaProducto(producto)));
  }

  if (state.category !== "Todos" && state.category !== "Ofertas") {
    offersSection.style.display = "none";
    return;
  }

  offersSection.style.display = ofertas.length ? "block" : "none";
  ofertas.forEach((producto) => offersGrid.appendChild(tarjetaProducto(producto)));
}

function bindEvents() {
  const searchInput = $("#searchInput");
  const categorySelect = $("#categorySelect");

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value;
      renderProductos();
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", (event) => {
      state.category = event.target.value;
      renderProductos();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setBrandAssets();
  buildCategories();
  bindEvents();
  renderProductos();
});
