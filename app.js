const state = {
  search: "",
  category: "Todos",
  cart: [],
};

const $ = (selector) => document.querySelector(selector);

function getConfig() {
  return window.CONFIG || {
    whatsappNumber: "",
    logoUrl: "logo-cybershop.png",
    logosStripUrl: "logos-cybershop-transparente.png",
    mensajeBase: "Hola estoy interesado en comprar este combo:",
  };
}

function getProducts() {
  return Array.isArray(window.productos) ? window.productos : [];
}

function formatCOP(value) {
  const number = Number(value || 0);
  return `$${number.toLocaleString("es-CO")}`;
}

function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function whatsappUrl(mensaje) {
  const config = getConfig();
  const phone = config.whatsappNumber || "";
  return `https://wa.me/${phone}?text=${encodeURIComponent(mensaje)}`;
}

function isComboActivo() {
  return state.cart.length > 1;
}

function precioAplicado(producto) {
  return isComboActivo() && producto.precioCombo
    ? Number(producto.precioCombo)
    : Number(producto.precio);
}

function cartSubtotalNormal() {
  return state.cart.reduce((total, item) => total + Number(item.precio || 0), 0);
}

function cartTotalAplicado() {
  return state.cart.reduce((total, item) => total + precioAplicado(item), 0);
}

function cartDescuento() {
  return Math.max(cartSubtotalNormal() - cartTotalAplicado(), 0);
}

function productoEnCarrito(producto) {
  return state.cart.some((item) => item.nombre === producto.nombre);
}

function emojiProducto(nombre) {
  const texto = normalizar(nombre);

  if (texto.includes("netflix")) return "🔴";
  if (texto.includes("disney")) return "🟣";
  if (texto.includes("amazon")) return "🔵";
  if (texto.includes("hbo") || texto.includes("max")) return "⚫";
  if (texto.includes("iptv")) return "🉐";
  if (texto.includes("plex")) return "🟡";
  if (texto.includes("crunchy")) return "🟠";
  if (texto.includes("paramount")) return "🔵";
  if (texto.includes("vix")) return "🟠";
  if (texto.includes("apple")) return "⚪";
  if (texto.includes("spotify")) return "🟢";
  if (texto.includes("youtube")) return "⭕";
  if (texto.includes("canva")) return "🟡";
  if (texto.includes("xbox")) return "🎮";
  if (texto.includes("capcut")) return "🟣";
  if (texto.includes("office")) return "🟠";
  if (
    texto.includes("chat") ||
    texto.includes("gpt") ||
    texto.includes("perplexity") ||
    texto.includes("gemini")
  ) {
    return "🤖";
  }

  return "✨";
}

function setBrandAssets() {
  const config = getConfig();
  const logo = $("#brandLogo");
  const strip = $("#logosStrip");
  const topWhatsapp = $("#topWhatsapp");
  const year = $("#year");

  if (logo && config.logoUrl) logo.src = config.logoUrl;
  if (strip && config.logosStripUrl) strip.src = config.logosStripUrl;

  if (topWhatsapp) {
    topWhatsapp.href = whatsappUrl(
      "👋 Hola, quiero información sobre los combos y promociones de CyberShop."
    );
  }

  if (year) year.textContent = new Date().getFullYear();
}

function buildCategories() {
  const select = $("#categorySelect");
  const productos = getProducts();

  if (!select) return;

  const categorias = [...new Set(productos.map((p) => p.categoria).filter(Boolean))]
    .filter((cat) => cat !== "Ofertas")
    .sort((a, b) => a.localeCompare(b, "es"));

  select.innerHTML =
    `<option value="Todos">Todos</option>` +
    categorias.map((cat) => `<option value="${cat}">${cat}</option>`).join("");
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

  if (producto.destacado) {
    badges.push(`<span class="badge hot">Oferta</span>`);
  }

  if (producto.stockLimitado) {
    badges.push(`<span class="badge stock">Limitado</span>`);
  }

  if (producto.precioCombo && producto.precioCombo < producto.precio) {
    badges.push(`<span class="badge combo">Combo</span>`);
  }

  const logo = producto.logo || "./logo-cybershop.png";
  const yaAgregado = productoEnCarrito(producto);

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
          ${
            producto.precioAnterior
              ? `<small class="before">Antes ${formatCOP(producto.precioAnterior)}</small>`
              : ""
          }
          <strong>${formatCOP(producto.precio)}</strong>
          ${
            producto.precioCombo && producto.precioCombo < producto.precio
              ? `<small class="combo-price">Combo: ${formatCOP(producto.precioCombo)}</small>`
              : ""
          }
        </div>
      </div>

      <button
        class="buy-btn add-cart-btn ${yaAgregado ? "is-added" : ""}"
        type="button"
        data-product="${producto.nombre}"
      >
        ${yaAgregado ? "Agregado" : "Agregar"}
      </button>
    </div>
  `;

  return card;
}

function renderProductos() {
  const grid = $("#productsGrid");
  const offersGrid = $("#offersGrid");
  const offersSection = $("#offersSection");
  const productos = getProducts();

  if (!grid || !offersGrid || !offersSection) return;

  const normales = filtrarProductos(productos, false);
  const ofertas = filtrarProductos(productos, true);

  grid.innerHTML = "";
  offersGrid.innerHTML = "";

  if (!productos.length) {
    grid.innerHTML = `<p class="empty">No se cargó la lista de productos. Revisa productos.js.</p>`;
    offersSection.style.display = "none";
    return;
  }

  if (normales.length === 0) {
    grid.innerHTML = `<p class="empty">No encontramos productos con ese filtro.</p>`;
  } else {
    normales.forEach((producto) => grid.appendChild(tarjetaProducto(producto)));
  }

  if (state.category !== "Todos" && state.category !== "Ofertas") {
    offersSection.style.display = "none";
    bindProductButtons();
    return;
  }

  offersSection.style.display = ofertas.length ? "block" : "none";
  ofertas.forEach((producto) => offersGrid.appendChild(tarjetaProducto(producto)));

  bindProductButtons();
}

function bindProductButtons() {
  document.querySelectorAll(".add-cart-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const nombre = button.dataset.product;
      const producto = getProducts().find((item) => item.nombre === nombre);

      if (!producto) return;

      toggleCartProduct(producto);
    });
  });
}

function toggleCartProduct(producto) {
  const existe = productoEnCarrito(producto);

  if (existe) {
    state.cart = state.cart.filter((item) => item.nombre !== producto.nombre);
  } else {
    state.cart.push(producto);
  }

  renderProductos();
  renderCart();
  openCart();
}

function removeCartProduct(nombre) {
  state.cart = state.cart.filter((item) => item.nombre !== nombre);
  renderProductos();
  renderCart();
}

function clearCart() {
  state.cart = [];
  renderProductos();
  renderCart();
}

function buildWhatsappMessage() {
  const config = getConfig();
  const comboActivo = isComboActivo();
  const subtotal = cartSubtotalNormal();
  const descuento = cartDescuento();
  const total = cartTotalAplicado();

  if (!state.cart.length) {
    return "👋 Hola, quiero información sobre los combos y promociones de CyberShop.";
  }

  const lineas = state.cart.map((item) => {
    const normal = Number(item.precio);
    const aplicado = precioAplicado(item);
    const ahorro = Math.max(normal - aplicado, 0);
    const emoji = emojiProducto(item.nombre);

    if (comboActivo && ahorro > 0) {
      return `${emoji} ${item.nombre}: ${formatCOP(aplicado)} (antes ${formatCOP(normal)})`;
    }

    return `${emoji} ${item.nombre}: ${formatCOP(aplicado)}`;
  });

  return `👋 ${config.mensajeBase}

${lineas.join("\n")}

💵 Subtotal normal: ${formatCOP(subtotal)}
🎁 Descuento aplicado: ${formatCOP(descuento)}
💰 Total a pagar: ${formatCOP(total)}`;
}

function renderCart() {
  const cartCount = $("#cartCount");
  const cartItems = $("#cartItems");
  const cartSubtotal = $("#cartSubtotal");
  const cartDiscount = $("#cartDiscount");
  const cartTotal = $("#cartTotal");
  const cartWhatsapp = $("#cartWhatsapp");
  const cartMode = $("#cartMode");

  if (cartCount) cartCount.textContent = state.cart.length;

  if (cartMode) {
    cartMode.textContent = isComboActivo()
      ? "Precio combo activado por 2 o más productos"
      : "Agrega otro producto para activar precio combo";
  }

  if (cartItems) {
    if (!state.cart.length) {
      cartItems.innerHTML = `<p class="cart-empty">Tu carrito está vacío.</p>`;
    } else {
      cartItems.innerHTML = state.cart
        .map((item) => {
          const aplicado = precioAplicado(item);
          const normal = Number(item.precio);
          const tieneDescuento = isComboActivo() && aplicado < normal;

          return `
            <div class="cart-item">
              <img
                src="${item.logo || "./logo-cybershop.png"}"
                alt="${item.nombre}"
                onerror="this.onerror=null; this.src='./logo-cybershop.png';"
              >
              <div>
                <strong>${emojiProducto(item.nombre)} ${item.nombre}</strong>
                <small>
                  ${
                    tieneDescuento
                      ? `Combo ${formatCOP(aplicado)} · Antes ${formatCOP(normal)}`
                      : formatCOP(aplicado)
                  }
                </small>
              </div>
              <button
                type="button"
                class="remove-cart-item"
                data-remove="${item.nombre}"
              >
                ×
              </button>
            </div>
          `;
        })
        .join("");
    }
  }

  if (cartSubtotal) cartSubtotal.textContent = formatCOP(cartSubtotalNormal());
  if (cartDiscount) cartDiscount.textContent = `-${formatCOP(cartDescuento())}`;
  if (cartTotal) cartTotal.textContent = formatCOP(cartTotalAplicado());

  if (cartWhatsapp) {
    cartWhatsapp.href = whatsappUrl(buildWhatsappMessage());
    cartWhatsapp.classList.toggle("disabled", state.cart.length === 0);
  }

  document.querySelectorAll(".remove-cart-item").forEach((button) => {
    button.addEventListener("click", () => removeCartProduct(button.dataset.remove));
  });
}

function openCart() {
  $("#cartDrawer")?.classList.add("is-open");
  $("#cartOverlay")?.classList.add("is-open");
}

function closeCart() {
  $("#cartDrawer")?.classList.remove("is-open");
  $("#cartOverlay")?.classList.remove("is-open");
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

  $("#cartFloat")?.addEventListener("click", openCart);
  $("#closeCart")?.addEventListener("click", closeCart);
  $("#cartOverlay")?.addEventListener("click", closeCart);
  $("#clearCart")?.addEventListener("click", clearCart);
}

document.addEventListener("DOMContentLoaded", () => {
  setBrandAssets();
  buildCategories();
  bindEvents();
  renderProductos();
  renderCart();
});
