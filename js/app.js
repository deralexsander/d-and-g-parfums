// ==========================================
// D & G PARFUMS — Catálogo Digital
// Votre essence, votre style
// ==========================================

let products = window.CatalogData?.products || [];
let standardPrices = window.CatalogData?.standardPrices || { "100ml": 17000, "50ml": 11000, "20ml": 6500 };

function syncCatalogData() {
  if (window.CatalogData) {
    if (Array.isArray(window.CatalogData.products)) {
      products = window.CatalogData.products;
    }
    if (window.CatalogData.standardPrices) {
      standardPrices = window.CatalogData.standardPrices;
    }
  }
}

// Metadatos y encabezados visuales para separar cada categoría
const categoryMeta = {
  "red-black": {
    title: "Línea Exclusiva Red & Black",
    desc: "Inspiraciones de nicho y alta gama",
    badge: "Alta Gama"
  },
  "mujer": {
    title: "Perfumería Fina Femenina",
    desc: "Perfumes tradicionales de diseñador",
    badge: "Perfume Mujer"
  },
  "hombre": {
    title: "Perfumería Fina Masculina",
    desc: "Perfumes tradicionales de diseñador",
    badge: "Perfume Hombre"
  },
  "teen": {
    title: "Perfumes Juveniles Teen",
    desc: "Perfumes juveniles de celebridades y artistas",
    badge: "Perfume"
  },
  "colonia-m": {
    title: "Colonias Corporales Dama",
    desc: "Refrescantes corporales de uso diario (400 ml)",
    badge: "Colonia Corporal"
  },
  "colonia-h": {
    title: "Colonias Corporales Hombre",
    desc: "Refrescantes corporales de uso diario (400 ml)",
    badge: "Colonia Corporal"
  },
  "splash": {
    title: "Colonia Splash Refrescante",
    desc: "Loción corporal fresca cítrica-frutal (500 ml)",
    badge: "Splash"
  }
};

const mapLayout = {
  mujer: {
    title: "Mapa de Fragancias Femeninas",
    quadrants: [
      { title: "Ligero / Fresco", groups: [
        { name: "Cítrico Maderoso", colors: ["c-citrico", "c-maderoso"], codes: ["F-28", "F-50"] },
        { name: "Cítrico Floral", colors: ["c-citrico", "c-floral"], codes: ["F-17"] },
        { name: "Floral Fresco", colors: ["c-floral"], codes: ["F-16"] },
        { name: "Floral Verde", colors: ["c-floral", "c-verde"], codes: ["F-36", "F-48", "F-52", "F-60"] },
        { name: "Floral Maderoso", colors: ["c-floral", "c-maderoso"], codes: ["F-22", "F-24", "F-65"] }
      ] },
      { title: "Ligero / Cálido", groups: [
        { name: "Floral Frutal", colors: ["c-floral", "c-frutal"], codes: ["F-07", "F-09", "F-13", "F-27", "F-25", "F-31", "F-32", "F-38", "F-39", "F-45", "F-55", "F-62", "F-66", "F-61", "Q 07"] },
        { name: "Floral Aldehídico", colors: ["c-floral", "c-aldehidico"], codes: ["F-05"] },
        { name: "Cítrico Gourmand", colors: ["c-citrico"], codes: ["F-30"] },
        { name: "Gourmand Vainilla", colors: ["c-oriental", "c-frutal"], codes: ["Q 06"] }
      ] },
      { title: "Intenso / Fresco", groups: [
        { name: "Floral Floral", colors: ["c-floral"], codes: ["F-18", "F-20", "F-26", "F-29"] },
        { name: "Chypre Floral", colors: ["c-chypre", "c-floral"], codes: ["F-01", "F-34", "F-47", "F-56", "F-59"] },
        { name: "Chypre Frutal", colors: ["c-chypre", "c-frutal"], codes: ["F-06", "F-10", "F-11", "F-51", "Q 01"] },
        { name: "Chypre Oriental", colors: ["c-chypre", "c-oriental"], codes: ["F-57"] },
        { name: "Oriental Cítrico", colors: ["c-oriental", "c-citrico"], codes: ["F-14"] }
      ] },
      { title: "Intenso / Cálido", groups: [
        { name: "Floral Oriental", colors: ["c-floral", "c-oriental"], codes: ["F-03", "F-12", "F-23", "F-35", "F-46", "F-54", "F-63", "F-64"] },
        { name: "Floral Especiado", colors: ["c-floral", "c-especiado"], codes: ["F-21"] },
        { name: "Oriental Floral", colors: ["c-oriental", "c-floral"], codes: ["F-19", "F-33", "F-42", "F-43", "F-44", "F-58", "Q 02", "Q 04", "Q 05", "Q 08"] },
        { name: "Oriental Frutal", colors: ["c-oriental", "c-frutal"], codes: ["F-15", "F-37", "F-40", "F-41", "F-49"] },
        { name: "Oriental Dulce", colors: ["c-oriental", "c-frutal"], codes: ["Q 03"] },
        { name: "Oriental Maderoso", colors: ["c-oriental", "c-maderoso"], codes: ["F-04", "F-53", "F-08", "Q 09"] }
      ] }
    ]
  },
  hombre: {
    title: "Mapa de Fragancias Masculinas",
    quadrants: [
      { title: "Ligero / Fresco", groups: [
        { name: "Cítrico Fresco", colors: ["c-citrico"], codes: ["H-26", "Q 55"] },
        { name: "Cítrico Aromático", colors: ["c-citrico", "c-aromatico"], codes: ["Q 53"] },
        { name: "Fougère Fresco", colors: ["c-fougere"], codes: ["H-01"] },
        { name: "Fougère Frutal", colors: ["c-fougere", "c-frutal"], codes: ["H-07"] },
        { name: "Fougère Aromático", colors: ["c-fougere", "c-aromatico"], codes: ["H-02", "H-04", "H-11", "H-13", "H-44", "H-15"] }
      ] },
      { title: "Ligero / Cálido", groups: [
        { name: "Maderoso Frutal", colors: ["c-maderoso", "c-frutal"], codes: ["H-06", "H-27", "H-34"] },
        { name: "Maderoso Verde", colors: ["c-maderoso", "c-verde"], codes: ["H-14"] },
        { name: "Maderoso Floral", colors: ["c-maderoso", "c-floral"], codes: ["H-19", "H-35"] },
        { name: "Maderoso Aromático", colors: ["c-maderoso", "c-aromatico"], codes: ["H-05", "H-08", "H-09", "H-10", "H-21", "H-30", "Q 51", "Q 56"] }
      ] },
      { title: "Intenso / Fresco", groups: [
        { name: "Maderoso Cítrico", colors: ["c-maderoso", "c-citrico"], codes: ["H-20", "H-22", "H-37", "H-41"] },
        { name: "Chypre Frutal", colors: ["c-chypre", "c-frutal"], codes: ["Q 54"] },
        { name: "Chypre Aromático", colors: ["c-chypre", "c-aromatico"], codes: ["H-03"] },
        { name: "Chypre Maderoso", colors: ["c-chypre", "c-maderoso"], codes: ["H-12"] },
        { name: "Fougère Maderoso", colors: ["c-fougere", "c-maderoso"], codes: ["H-18", "H-31", "H-32"] }
      ] },
      { title: "Intenso / Cálido", groups: [
        { name: "Cuero", colors: ["c-cuero"], codes: ["Q 52"] },
        { name: "Oriental Frutal", colors: ["c-oriental", "c-frutal"], codes: ["H-16", "H-17", "H-29", "H-39", "Q 57"] },
        { name: "Fougère Oriental", colors: ["c-fougere", "c-oriental"], codes: ["H-33", "H-36", "H-38", "H-40", "H-45"] },
        { name: "Oriental Especiado", colors: ["c-oriental", "c-especiado"], codes: ["H-43", "Q 58"] },
        { name: "Oriental Maderoso", colors: ["c-oriental", "c-maderoso"], codes: ["H-23", "H-24", "H-25", "H-28", "H-42"] },
        { name: "Oriental Vainilla", colors: ["c-oriental", "c-frutal"], codes: ["Q 59"] }
      ] }
    ]
  }
};

// Estado general de la aplicación
let currentCategory = "all";
let activeMapGender = "mujer";
let mapViewportMode = null;
let searchQuery = "";
let malePresentationVisible = {};
let femalePresentationVisible = {};
let otherPresentationVisible = {};

const maleAromaImageBase = "img/Fragancias%20Masculinas/Inspiraci%C3%B3n%20visual%20por%20aroma";
const malePresentationImageBase = "img/Fragancias%20Masculinas/Presentaci%C3%B3n%20general";
const malePresentationImages = {
  "100ml": "perfume-parfums-d-parfums-hombre-100ml-eau-de-toilette-essenciel.webp"
};

const femaleAromaImageBase = "img/Fragancias%20Femeninas/Inspiraci%C3%B3n%20visual%20por%20aroma";
const femalePresentationImageBase = "img/Fragancias%20Femeninas/Presentaci%C3%B3n%20general";
const femalePresentationImages = {
  "100ml": "perfume-parfums-d-parfums-mujer-100ml-eau-de-toilette-essenciel.webp"
};

const missingImageSrc = "img/no-img/no-encontrado.webp";

function getAromaImagePath(product) {
  const code = product.code.split("/")[0].trim();
  const normalizedCode = code.replace(/\s+/g, "").toUpperCase();

  if (product.cat === "hombre") {
    return `${maleAromaImageBase}/${code}/parfums_${code.replace("-", "")}.webp`;
  }
  if (product.cat === "mujer") {
    const femaleCode = code.split("/")[0].trim();
    return `${femaleAromaImageBase}/${femaleCode}/parfums_${femaleCode.replace("-", "").toLowerCase()}.webp`;
  }
  if (product.cat === "red-black") {
    const number = normalizedCode.slice(1);
    const folder = product.badge === "BLACK" ? "Black%20parfums" : "Red%20parfums";
    return `img/${folder}/Inspiraci%C3%B3n%20visual%20por%20aroma/Q-${number}/parfums_${normalizedCode.toLowerCase()}.webp`;
  }
  if (product.cat === "teen") {
    const number = normalizedCode.slice(1);
    const folder = Number(number) <= 6 ? "girl" : "boy";
    return `img/teen/${folder}/Inspiraci%C3%B3n%20visual%20por%20aroma/J-${number}/parfums_${normalizedCode.toLowerCase()}.webp`;
  }
  if (product.cat === "colonia-h" || product.cat === "colonia-m") {
    const number = normalizedCode.slice(1);
    const folder = product.cat === "colonia-h" ? "Colonias%20Hombre" : "colonias%20mujer";
    return `img/${folder}/Inspiraci%C3%B3n%20visual%20por%20aroma/S-${number}/parfums_${normalizedCode.toLowerCase()}.webp`;
  }
  if (product.cat === "splash") {
    return "img/colonia%20splash/Inspiraci%C3%B3n%20visual%20por%20aroma/B-101/parfums_b101.webp";
  }
  return "";
}

function getPresentationImage(product) {
  if (product.cat === "red-black") {
    return product.badge === "BLACK"
      ? { src: "img/Black%20parfums/Presentaci%C3%B3n%20general/black-parfums-empaque.webp", alt: "Envase y empaque Black Parfums" }
      : { src: "img/Red%20parfums/Presentaci%C3%B3n%20general/red-parfums-empaque.webp", alt: "Envase y empaque Red Parfums" };
  }
  if (product.cat === "teen") {
    if (/^J0[0-6]$/.test(product.code)) {
      return { src: `img/teen/girl/Presentaci%C3%B3n%20general/${product.code.replace("J", "J-")}.webp`, alt: `Perfume ${product.name} de la línea Teen` };
    }
    if (/^J0[7-9]$/.test(product.code)) {
      return { src: "img/teen/boy/Presentaci%C3%B3n%20general/teen-boy.webp", alt: "Empaque de la línea Teen masculina" };
    }
    return null;
  }
  if (product.cat === "hombre") {
    return { src: `${malePresentationImageBase}/${malePresentationImages["100ml"]}`, alt: `Presentación general 100 ml masculina` };
  }
  if (product.cat === "mujer") {
    return { src: `${femalePresentationImageBase}/${femalePresentationImages["100ml"]}`, alt: `Presentación general 100 ml femenina` };
  }
  if (product.cat === "colonia-h") {
    return { src: "img/Colonias%20Hombre/Presentaci%C3%B3n%20general/colonia-parfums-d-parfums-hombre-400ml-eau-de-cologne-essenciel.webp", alt: "Envase de colonia masculina 400 ml" };
  }
  if (product.cat === "colonia-m") {
    return { src: "img/colonias%20mujer/Presentaci%C3%B3n%20general/colonia-parfums-d-parfums-mujer-400ml-eau-de-cologne-essenciel.webp", alt: "Envase de colonia femenina 400 ml" };
  }
  if (product.cat === "splash") {
    return { src: "img/colonia%20splash/Presentaci%C3%B3n%20general/colonia-splash-parfums-b101-500ml.webp", alt: "Envase de colonia Splash 500 ml" };
  }
  return null;
}

function isPresentationVisible(product) {
  if (product.cat === "hombre") return Boolean(malePresentationVisible[product.id]);
  if (product.cat === "mujer") return Boolean(femalePresentationVisible[product.id]);
  return Boolean(otherPresentationVisible[product.id]);
}

function setPresentationVisible(product, visible) {
  if (product.cat === "hombre") malePresentationVisible[product.id] = visible;
  else if (product.cat === "mujer") femalePresentationVisible[product.id] = visible;
  else otherPresentationVisible[product.id] = visible;
}

function updateImageToggleButton(card, visible) {
  const button = card.querySelector(".aroma-image-btn");
  if (!button) return;

  const nextLabel = visible ? "Ver aroma" : "Ver frasco";
  button.textContent = nextLabel;
  button.setAttribute("aria-label", nextLabel);
  button.setAttribute("title", nextLabel);
}

function normalizeSearchText(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escapeAttr(value) {
  return escapeHTML(value).replace(/"/g, "&quot;");
}

function productMatchesQuery(p, rawQuery, allProducts) {
  if (!rawQuery) return true;
  const q = normalizeSearchText(rawQuery);
  const codeQ = normalizeProductCode(rawQuery);

  const directMatch =
    normalizeSearchText(p.name).includes(q) ||
    normalizeSearchText(p.sub).includes(q) ||
    normalizeSearchText(p.notes).includes(q) ||
    normalizeSearchText(p.cat).includes(q) ||
    (p.badge && normalizeSearchText(p.badge).includes(q)) ||
    getProductCodeVariants(p.code).some(variant => variant.includes(codeQ));

  return directMatch;
}

function editDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[a.length][b.length];
}

function findSearchSuggestion(rawQuery, allProducts) {
  const q = normalizeSearchText(rawQuery);
  if (q.length < 3) return null;

  let bestCandidate = null;
  let minScore = Infinity;

  allProducts.forEach(p => {
    const normName = normalizeSearchText(p.name);
    const score = editDistance(q, normName);
    const threshold = Math.max(2, Math.floor(normName.length * 0.45));

    if (score < minScore && score <= threshold) {
      minScore = score;
      bestCandidate = p.name;
    }
  });

  return bestCandidate;
}

function normalizeProductCode(value) {
  return (value || "")
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

function getProductCodeVariants(code) {
  const raw = (code || "").toUpperCase();
  const normalized = normalizeProductCode(raw);
  const parts = raw.split("/").map(part => normalizeProductCode(part)).filter(Boolean);
  return Array.from(new Set([raw, normalized, ...parts]));
}

function escapeHTML(value) {
  return String(value ?? "").replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function renderLucideIcons() {
  window.lucide?.createIcons();
}

function findMapProduct(code, gender) {
  const normalizedCode = normalizeProductCode(code);
  const targetProducts = products.filter(product => product.cat === gender || product.cat === "red-black");
  return targetProducts.find(product =>
    normalizeProductCode(product.code.split("/")[0]) === normalizedCode || getProductCodeVariants(product.code).includes(normalizedCode)
  ) || products.find(product =>
    normalizeProductCode(product.code.split("/")[0]) === normalizedCode || getProductCodeVariants(product.code).includes(normalizedCode)
  );
}

function renderMap(gender = activeMapGender) {
  const config = mapLayout[gender];
  const container = document.getElementById(`mapContainer${gender === "mujer" ? "Mujer" : "Hombre"}`);
  const query = normalizeSearchText(searchQuery);
  const codeQuery = normalizeProductCode(searchQuery);
  const isDesktop = window.matchMedia("(min-width: 641px)").matches;
  mapViewportMode = isDesktop;

  const quadrants = config.quadrants.map((quadrant, index) => {
    const groups = quadrant.groups.map(group => {
      const productsInGroup = group.codes.map(code => ({
        code,
        product: findMapProduct(code, gender)
      })).filter(item => item.product);

      const groupMatches = query && normalizeSearchText(group.name).includes(query);
      const matches = productsInGroup.filter(({ code, product }) => {
        if (!query || groupMatches) return true;
        const searchableText = normalizeSearchText([product.code, product.name, product.sub].join(" "));
        return searchableText.includes(query) ||
          normalizeProductCode(code).includes(codeQuery);
      });

      if (matches.length === 0) return "";

      const dots = group.colors.map(color => `<span class="dot ${color}" aria-hidden="true"></span>`).join("");
      const items = matches.map(({ code, product }) => `
        <button class="map-product" type="button" data-action="map-product" data-product-id="${product.id}">
          <span class="map-product-code">${escapeHTML(code)}</span>
          <span class="map-product-name">${escapeHTML(product.name)}</span>
        </button>
      `).join("");

      return `
        <section class="map-group">
          <h3 class="quadrant-group-name">${dots}${escapeHTML(group.name)}</h3>
          <div class="quadrant-items">${items}</div>
        </section>
      `;
    }).filter(Boolean);

    if (groups.length === 0) return "";
    const count = groups.reduce((total, groupHtml) => total + (groupHtml.match(/class="map-product"/g) || []).length, 0);

    return `
      <details class="quadrant" ${isDesktop || query || index === 0 ? "open" : ""}>
        <summary class="quadrant-summary">
          <span class="quadrant-tag">${escapeHTML(quadrant.title)}</span>
          <span class="quadrant-count">${count} ${count === 1 ? "fragancia" : "fragancias"}</span>
        </summary>
        <div class="quadrant-groups">${groups.join("")}</div>
      </details>
    `;
  }).filter(Boolean);

  container.innerHTML = `
    <h2 class="compass-title">${config.title}</h2>
    <p class="compass-desc">Ligero a intenso · Fresco a cálido</p>
    <div class="compass-grid">
      ${quadrants.length ? quadrants.join("") : `<p class="map-empty">No se encontraron fragancias para esa búsqueda.</p>`}
    </div>
  `;
}

function showMapProduct(productId) {
  const product = products.find(item => item.id === productId);
  if (!product) return;

  currentCategory = product.cat;
  searchQuery = product.code.split("/")[0].trim();

  document.querySelectorAll(".pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === currentCategory);
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.value = searchQuery;
    document.querySelector(".search-clear-btn").hidden = false;
  }

  renderProducts();
  document.querySelector(`[data-product-card="${product.id}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function appendCategoryHeading(container, categoryKey) {
  const meta = categoryMeta[categoryKey];
  if (!meta) return;

  const sectionHeader = document.createElement("div");
  sectionHeader.className = "category-section-header";
  sectionHeader.innerHTML = `
    <h2 class="section-title">${meta.title}</h2>
    <p class="section-desc">${meta.desc}</p>
  `;
  container.appendChild(sectionHeader);
}

function appendCategoryDisclaimer(container) {
  const disclaimer = document.createElement("div");
  disclaimer.className = "catalog-disclaimer";
  disclaimer.innerHTML = `
    <p>Catálogo digital de consulta exclusiva para clientes · <strong>D & G Parfums</strong></p>
  `;
  container.appendChild(disclaimer);
}

function appendRedBlackProducts(container, items) {
  const redItems = items.filter(p => p.badge === "RED");
  const blackItems = items.filter(p => p.badge === "BLACK");

  if (redItems.length > 0) {
    const redSub = document.createElement("div");
    redSub.className = "sub-section-header sub-red";
    redSub.innerHTML = `<h3>Colección Red Parfums</h3><span>Fragancias de alta gama femenina y unisex</span>`;
    container.appendChild(redSub);

    const redGrid = document.createElement("div");
    redGrid.className = "products-grid";
    redGrid.innerHTML = redItems.map(buildProductCard).join("");
    container.appendChild(redGrid);
  }

  if (blackItems.length > 0) {
    const blackSub = document.createElement("div");
    blackSub.className = "sub-section-header sub-black";
    blackSub.innerHTML = `<h3>Colección Black Parfums</h3><span>Fragancias de alta gama masculina y unisex</span>`;
    container.appendChild(blackSub);

    const blackGrid = document.createElement("div");
    blackGrid.className = "products-grid";
    blackGrid.innerHTML = blackItems.map(buildProductCard).join("");
    container.appendChild(blackGrid);
  }
}

function appendTeenProducts(container, items) {
  const girlItems = items.filter(p => /^J0[0-6]$/.test(p.code));
  const boyItems = items.filter(p => /^J0[7-9]$/.test(p.code));

  if (girlItems.length > 0) {
    const girlSub = document.createElement("div");
    girlSub.className = "sub-section-header sub-teen-girl";
    girlSub.innerHTML = `<h3>Línea Teen Girl</h3><span>Aromas dulces, florales y juveniles</span>`;
    container.appendChild(girlSub);

    const girlGrid = document.createElement("div");
    girlGrid.className = "products-grid";
    girlGrid.innerHTML = girlItems.map(buildProductCard).join("");
    container.appendChild(girlGrid);
  }

  if (boyItems.length > 0) {
    const boySub = document.createElement("div");
    boySub.className = "sub-section-header sub-teen-boy";
    boySub.innerHTML = `<h3>Línea Teen Boy</h3><span>Aromas frescos, deportivos y modernos</span>`;
    container.appendChild(boySub);

    const boyGrid = document.createElement("div");
    boyGrid.className = "products-grid";
    boyGrid.innerHTML = boyItems.map(buildProductCard).join("");
    container.appendChild(boyGrid);
  }
}

function getCategoryLabel(p) {
  if (p.cat === "mujer") return "Perfume Mujer";
  if (p.cat === "hombre") return "Perfume Hombre";
  if (p.cat === "red-black") {
    return p.badge === "BLACK" ? "Línea Black" : "Línea Red";
  }
  if (p.cat === "teen") {
    return /^J0[0-6]$/.test(p.code) ? "Línea Teen Girl" : "Línea Teen Boy";
  }
  if (p.cat === "colonia-m") return "Colonia Dama";
  if (p.cat === "colonia-h") return "Colonia Hombre";
  if (p.cat === "splash") return "Colonia Splash";
  return categoryMeta[p.cat]?.title || "Perfume";
}

// Función constructora para cada tarjeta de producto (sin botones de compra, precio agrandado)
function buildProductCard(p) {
  let specialBadge = "";
  let badgeClass = "badge-std";
  if (p.badge === "RED") {
    specialBadge = "RED";
    badgeClass = "badge-red";
  } else if (p.badge === "BLACK") {
    specialBadge = "BLACK";
    badgeClass = "badge-black";
  } else if (p.cat === "teen") {
    specialBadge = "TEEN";
    badgeClass = "badge-teen";
  }

  let dotsHtml = "";
  if (p.colors && p.colors.length > 0) {
    dotsHtml = `<div class="color-dots">${p.colors.map(c => `<span class="dot ${c}"></span>`).join("")}</div>`;
  }
  const productName = escapeHTML(p.name);
  const aromaNotes = p.notes && p.colors?.length
    ? p.notes.split(/\s+/).map((word, index) =>
        `<span class="aroma-note-tone aroma-${p.colors[index % p.colors.length]}">${escapeHTML(word)}</span>`
      ).join(" ")
    : escapeHTML(p.notes || "");

  let sizeLabel = "100 ml";
  let price = 17000;
  if (p.tiered) {
    sizeLabel = "100 ml";
    price = standardPrices["100ml"] || 17000;
  } else {
    sizeLabel = p.fixedSize || "Estándar";
    price = p.price || 0;
  }

  const categoryLabel = getCategoryLabel(p);
  const presentationVisible = isPresentationVisible(p);
  const presentationImage = getPresentationImage(p);
  const aromaImagePath = getAromaImagePath(p);

  const productImage = !presentationVisible && aromaImagePath
    ? { src: aromaImagePath, alt: `Inspiración olfativa de ${p.name}` }
    : (presentationImage || { src: aromaImagePath || missingImageSrc, alt: p.name });

  const aromaImageButton = aromaImagePath && presentationImage
    ? `<button class="aroma-image-btn" type="button" data-action="toggle-product-image" data-product-id="${p.id}" aria-label="${presentationVisible ? "Ver aroma" : "Ver frasco"}" title="${presentationVisible ? "Ver aroma" : "Ver frasco"}">${presentationVisible ? "Ver aroma" : "Ver frasco"}</button>`
    : "";

  return `
    <div class="card${p.cat === "hombre" ? " card-male" : p.cat === "mujer" ? " card-female" : ""}" data-product-card="${p.id}">
      <div class="card-body-content">
        <!-- 1. Encabezado superior: Código y puntos olfativos -->
        <div class="card-top">
          <div class="card-identity">
            <span class="card-code">${escapeHTML(p.code)}</span>
            ${dotsHtml}
          </div>
          ${specialBadge ? `<span class="card-badge ${badgeClass}">${specialBadge}</span>` : ""}
        </div>

        <!-- 2. Imagen centrada con toggle de aroma/frasco -->
        ${productImage ? `
          <div class="card-img-wrapper card-img-wrapper-${p.cat}">
            <img class="card-product-image" src="${productImage.src}" alt="${escapeHTML(productImage.alt)}" data-fallback-src="${missingImageSrc}" loading="lazy">
            ${aromaImageButton}
          </div>` : ""}

        <!-- 3. Etiquetado, Nombre e Información ordenada -->
        <div class="card-info">
          <div class="card-category-label">${escapeHTML(categoryLabel)}</div>
          <div class="card-title" title="${productName}">${productName}</div>
          <div class="card-subtitle">${escapeHTML(p.sub || "")}</div>
          ${p.notes ? `<div class="card-notes">${aromaNotes}</div>` : ""}
        </div>
      </div>

      <!-- 4. Formato y Precio destacado -->
      <div class="card-bottom">
        <div class="card-price-row">
          <span class="card-size-label">${escapeHTML(sizeLabel)}</span>
          <div class="price-tag-large">$${price.toLocaleString("es-CL")}</div>
        </div>
      </div>
    </div>
  `;
}

// Renderizado principal con separación por categorías
function renderProducts() {
  const container = document.getElementById("catalogList");
  const mapSection = document.getElementById("mapSection");

  if (currentCategory === "mapa") {
    container.hidden = true;
    mapSection.hidden = false;
    renderMap();
    renderLucideIcons();
    return;
  } else {
    container.hidden = false;
    mapSection.hidden = true;
  }

  container.innerHTML = "";

  const filtered = products.filter(p =>
    (currentCategory === "all" || p.cat === currentCategory) && productMatchesQuery(p, searchQuery, products)
  );

  if (filtered.length === 0) {
    const suggestion = findSearchSuggestion(searchQuery, products);
    const suggestionHtml = suggestion
      ? `<div class="search-suggestion">¿Quisiste decir <button type="button" class="search-suggestion-btn" data-action="apply-suggestion" data-suggestion="${escapeAttr(suggestion)}">${escapeAttr(suggestion)}</button>?</div>`
      : "";
    container.innerHTML = `<div class="empty-state">No se encontraron fragancias con esa búsqueda.${suggestionHtml}</div>`;
    renderLucideIcons();
    return;
  }

  // Si está en 'Todos' y sin búsqueda activa: separar por secciones visualmente distinguidas
  if (currentCategory === "all" && !searchQuery.trim()) {
    const order = ["red-black", "mujer", "hombre", "teen", "colonia-m", "colonia-h", "splash"];
    order.forEach(catKey => {
      const catProducts = filtered.filter(p => p.cat === catKey);
      if (catProducts.length > 0) {
        appendCategoryHeading(container, catKey);
        if (catKey === "red-black") {
          appendRedBlackProducts(container, catProducts);
        } else if (catKey === "teen") {
          appendTeenProducts(container, catProducts);
        } else {
          const grid = document.createElement("div");
          grid.className = "products-grid";
          grid.innerHTML = catProducts.map(buildProductCard).join("");
          container.appendChild(grid);
        }
      }
    });
    appendCategoryDisclaimer(container);
  } else {
    // Si hay búsqueda o categoría específica seleccionada: mostrar cuadrícula directa
    const grid = document.createElement("div");
    grid.className = "products-grid";
    grid.innerHTML = filtered.map(buildProductCard).join("");
    container.appendChild(grid);
    appendCategoryDisclaimer(container);
  }

  renderLucideIcons();
}

function toggleProductImage(productId) {
  const product = products.find(item => item.id === productId);
  const card = document.querySelector(`[data-product-card="${productId}"]`);
  if (!product || !card) return;

  const showPresentation = !isPresentationVisible(product);
  const nextImage = showPresentation
    ? getPresentationImage(product)
    : { src: getAromaImagePath(product), alt: `Imagen de inspiración olfativa para ${product.name}` };
  if (!nextImage?.src) return;

  setPresentationVisible(product, showPresentation);
  updateImageToggleButton(card, showPresentation);
  updateCardImage(card.querySelector(".card-product-image"), {
    src: nextImage.src,
    alt: nextImage.alt
  });
}

function updateCardImage(image, { src, alt }) {
  if (!image) return;

  image.classList.add("is-swapping");
  const tempImg = new Image();
  tempImg.onload = () => {
    image.src = src;
    if (alt) image.alt = alt;
    image.dataset.fallbackApplied = "";
    image.classList.remove("is-swapping");
  };
  tempImg.onerror = () => {
    image.src = image.dataset.fallbackSrc || missingImageSrc;
    image.alt = "Imagen no disponible";
    image.dataset.fallbackApplied = "true";
    image.classList.remove("is-swapping");
  };
  tempImg.src = src;
}

function showMapGender(gender) {
  activeMapGender = gender;
  document.getElementById("btnMapMujer").classList.toggle("active", gender === "mujer");
  document.getElementById("btnMapHombre").classList.toggle("active", gender === "hombre");
  document.getElementById("mapContainerMujer").hidden = gender !== "mujer";
  document.getElementById("mapContainerHombre").hidden = gender !== "hombre";
  renderMap(gender);
  renderLucideIcons();
}

function clearSearch() {
  const input = document.getElementById("searchInput");
  input.value = "";
  searchQuery = "";
  document.querySelector(".search-clear-btn").hidden = true;
  if (currentCategory === "mapa") {
    renderMap();
  } else {
    renderProducts();
  }
  input.focus();
}

// Event delegation global
document.addEventListener("click", event => {
  const control = event.target.closest("[data-action]");
  if (!control) return;

  switch (control.dataset.action) {
    case "map-gender":
      showMapGender(control.dataset.gender);
      window.scrollTo({ top: 0, behavior: "smooth" });
      break;
    case "map-product":
      showMapProduct(control.dataset.productId);
      break;
    case "apply-suggestion": {
      const input = document.getElementById("searchInput");
      input.value = control.dataset.suggestion;
      input.dispatchEvent(new Event("input"));
      break;
    }
    case "clear-search":
      clearSearch();
      break;
    case "toggle-product-image":
      toggleProductImage(control.dataset.productId);
      break;
  }
});

// Imagen de reserva táctil / fallback
document.addEventListener("error", event => {
  const image = event.target;
  if (!(image instanceof HTMLImageElement) || !image.dataset.fallbackSrc || image.dataset.fallbackApplied) return;

  image.dataset.fallbackApplied = "true";
  image.src = image.dataset.fallbackSrc;
  image.alt = "Imagen no disponible";
}, true);

// Píldoras de categoría
document.querySelectorAll(".pill-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".pill-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.dataset.category;
    renderProducts();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Buscador interactivo
const searchInputEl = document.getElementById("searchInput");
if (searchInputEl) {
  searchInputEl.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    const clearBtn = document.querySelector(".search-clear-btn");
    if (clearBtn) clearBtn.hidden = searchQuery.length === 0;

    if (currentCategory === "mapa") {
      renderMap();
    } else {
      renderProducts();
    }
  });
}

window.addEventListener("resize", () => {
  const isDesktop = window.matchMedia("(min-width: 641px)").matches;
  if (currentCategory === "mapa" && isDesktop !== mapViewportMode) renderMap();
});

// Arranque de la aplicación
function initApp() {
  syncCatalogData();
  renderProducts();
  renderLucideIcons();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}
