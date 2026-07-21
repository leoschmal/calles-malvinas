/* Toponimia Malvinas — Barrio Altos del Paracao
   Lógica de interacción: mini-mapa real de las islas, plano real del barrio
   (con puntos clickeables) y panel de detalle. */

(function () {
  "use strict";

  /* ---------------- Mini-mapa real de las islas ---------------- */
  // Contorno real (ver islands-map-data.js). Rótulos y puntos son nuestros,
  // agregados sobre esa base.
  function allPoints() {
    return STREETS.map((s) => ({ nombre: s.propuesta, mapa: s.mapa }));
  }

  function renderIslandsMap(highlightMapa, highlightLabel) {
    const pts = allPoints();
    const dots = pts
      .map((p) => {
        const isActive = highlightMapa && p.mapa.x === highlightMapa.x && p.mapa.y === highlightMapa.y;
        if (isActive) return "";
        return `<circle cx="${p.mapa.x}" cy="${p.mapa.y}" r="5" class="islet-dot"></circle>`;
      })
      .join("");

    const pin = highlightMapa
      ? `<g class="islet-pin" transform="translate(${highlightMapa.x},${highlightMapa.y})">
           <circle r="24" class="islet-pin-halo"></circle>
           <circle r="10" class="islet-pin-core"></circle>
         </g>`
      : "";

    const land = ISLANDS_POLYGONS.map((pts) => `<polygon points="${pts}" class="island-shape"></polygon>`).join("");

    return `
      <svg viewBox="${ISLANDS_VIEWBOX}" role="img" aria-label="Ubicación de ${highlightLabel || "los topónimos"} en las Islas Malvinas">
        <g class="graticule">
          ${[150, 320, 490, 660, 830]
            .map((y) => `<line x1="0" y1="${y}" x2="${ISLANDS_BASE_WIDTH}" y2="${y}"></line>`)
            .join("")}
          ${[190, 380, 570, 760, 950]
            .map((x) => `<line x1="${x}" y1="0" x2="${x}" y2="${ISLANDS_BASE_HEIGHT}"></line>`)
            .join("")}
        </g>
        ${land}
        <text x="300" y="175" class="island-label">GRAN MALVINA</text>
        <text x="720" y="165" class="island-label">ISLA SOLEDAD</text>
        ${dots}
        ${pin}
      </svg>`;
  }

  /* ---------------- Plano real del barrio (con puntos clickeables) ---------------- */
  function renderNeighborhoodPlan() {
    const mount = document.getElementById("chartPlan");
    if (!mount) return;

    const hotspots = STREETS.map(
      (s) => `
      <button class="plano-hotspot" style="left:${s.planoPos.x}%; top:${s.planoPos.y}%;" data-numero="${s.numero}" aria-label="Ver calle N.° ${s.numero}, propuesta ${s.propuesta}">
        <span class="plano-hotspot__dot"></span>
        <span class="plano-hotspot__label">N.° ${s.numero} — ${s.propuesta}</span>
      </button>`
    ).join("");

    mount.innerHTML = `
      <div class="plano-real">
        <img src="img/plano-barrio.jpg" alt="Plano real del barrio Altos del Paracao, con las trece calles a nombrar" class="plano-real__img">
        ${hotspots}
      </div>`;

    mount.querySelectorAll(".plano-hotspot").forEach((el) => {
      const numero = el.getAttribute("data-numero");
      el.addEventListener("click", () => openDetailByNumero(numero));
      el.addEventListener("mouseenter", () => highlightCompanion(numero));
      el.addEventListener("mouseleave", unhighlightCompanion);
      el.addEventListener("focus", () => highlightCompanion(numero));
      el.addEventListener("blur", unhighlightCompanion);
    });
  }

  /* ---------------- Mapa satélite acompañante (se resalta al pasar el mouse) ---------------- */
  function renderCompanionMap() {
    const mount = document.getElementById("islandsCompanionMap");
    if (!mount) return;
    const land = ISLANDS_POLYGONS.map((pts) => `<polygon points="${pts}" class="island-shape"></polygon>`).join("");
    const dots = STREETS.map(
      (s) => `<circle cx="${s.mapa.x}" cy="${s.mapa.y}" r="6" class="islet-dot-linked" data-numero="${s.numero}"></circle>`
    ).join("");
    mount.innerHTML = `
      <svg viewBox="${ISLANDS_VIEWBOX}" role="img" aria-hidden="true">
        ${land}
        <text x="300" y="175" class="island-label">GRAN MALVINA</text>
        <text x="720" y="165" class="island-label">ISLA SOLEDAD</text>
        ${dots}
        <g class="companion-pin" id="companionPin">
          <circle r="26" class="islet-pin-halo"></circle>
          <circle r="11" class="islet-pin-core"></circle>
        </g>
      </svg>`;
  }

  function highlightCompanion(numero) {
    const pin = document.getElementById("companionPin");
    const street = STREETS.find((s) => s.numero === numero);
    if (!pin || !street) return;
    pin.setAttribute("transform", `translate(${street.mapa.x},${street.mapa.y})`);
    pin.classList.add("is-visible");
    document.querySelectorAll(".islet-dot-linked").forEach((d) => {
      d.classList.toggle("is-active", d.getAttribute("data-numero") === numero);
    });
  }

  function unhighlightCompanion() {
    const pin = document.getElementById("companionPin");
    if (pin) pin.classList.remove("is-visible");
    document.querySelectorAll(".islet-dot-linked").forEach((d) => d.classList.remove("is-active"));
  }

  /* ---------------- Fondo decorativo con las islas ---------------- */
  function renderPlanoBgIslands() {
    const mount = document.getElementById("planoBgIslands");
    if (!mount) return;
    const land = ISLANDS_POLYGONS.map((pts) => `<polygon points="${pts}" class="island-shape"></polygon>`).join("");
    mount.innerHTML = `<svg viewBox="${ISLANDS_VIEWBOX}" aria-hidden="true">${land}</svg>`;
  }

  /* ---------------- Grillas de tarjetas ---------------- */
  function renderStreetGrid() {
    const mount = document.getElementById("streetGrid");
    if (!mount) return;
    mount.innerHTML = STREETS.map(
      (s) => `
      <button class="street-card" data-numero="${s.numero}">
        <span class="street-card__num">CALLE N.° ${s.numero}</span>
        <div class="street-card__name">${s.propuesta}</div>
        <span class="street-card__tipo">${s.tipo}</span>
      </button>`
    ).join("");
    mount.querySelectorAll(".street-card").forEach((el) => {
      el.addEventListener("click", () => openDetailByNumero(el.getAttribute("data-numero")));
    });
  }

  /* ---------------- Buscador rápido por número actual ---------------- */
  function renderNumberChips() {
    const mount = document.getElementById("numberChips");
    if (!mount) return;
    mount.innerHTML = STREETS.map((s) => `<button class="chip" data-numero="${s.numero}">N.° ${s.numero}</button>`).join("");
    mount.querySelectorAll(".chip").forEach((el) => {
      el.addEventListener("click", () => openDetailByNumero(el.getAttribute("data-numero")));
    });
  }

  /* ---------------- Panel de detalle ---------------- */
  function openDetailByNumero(numero) {
    const street = STREETS.find((s) => s.numero === numero);
    if (street) openDetail(street);
  }

  function openDetail(item) {
    const panel = document.getElementById("detailPanel");
    const overlay = document.getElementById("detailOverlay");
    if (!panel || !overlay) return;

    const nota = (item.img.nota || "").replace(/\.\s*$/, "");
    const wikiCredit = item.img.aprox
      ? `Imagen representativa${nota ? " — " + nota : ""}. Foto: ${item.img.autor} (${item.img.licencia}), <a href="${item.img.credito}" target="_blank" rel="noopener">Wikimedia Commons</a>.`
      : `Foto: ${item.img.autor} (${item.img.licencia}), <a href="${item.img.credito}" target="_blank" rel="noopener">Wikimedia Commons</a>.${nota ? " " + nota + "." : ""}`;

    panel.querySelector(".detail-panel__inner").innerHTML = `
      <button class="detail-close" id="detailCloseBtn" aria-label="Cerrar">&times;</button>
      <div class="eyebrow detail-panel__eyebrow">CALLE N.° ${item.numero}</div>
      <h3 class="detail-panel__title">${item.propuesta}</h3>
      <div class="detail-panel__meta">
        <span class="tag">${item.tipo}</span>
        <span>${item.ubicacion}</span>
      </div>
      <img class="detail-photo" id="detailImg" alt="${item.propuesta}">
      <p class="detail-photo-credit" id="detailCredit">${wikiCredit}</p>
      ${item.dato ? `<p class="detail-dato">${item.dato}</p>` : ""}
      <p class="detail-resena">${item.resena}</p>
      <div class="detail-map-label">Ubicación en las islas (esquemática)</div>
      <div class="detail-map">${renderIslandsMap(item.mapa, item.propuesta)}</div>
    `;

    // Si existe una foto propia en img/calles/<slug>.<ext> se usa esa
    // (probando varias extensiones); si no, se cae a la foto de Wikimedia (con crédito visible).
    const imgEl = document.getElementById("detailImg");
    const creditEl = document.getElementById("detailCredit");
    const localBase = `img/calles/${item.slug}`;
    const localExts = ["jpg", "jpeg", "png", "webp"];
    creditEl.style.display = "none";
    let extIndex = 0;
    imgEl.addEventListener("error", function onErr() {
      extIndex++;
      if (extIndex < localExts.length) {
        imgEl.src = `${localBase}.${localExts[extIndex]}`;
      } else {
        imgEl.removeEventListener("error", onErr);
        imgEl.src = item.img.src;
      }
    });
    imgEl.addEventListener("load", function onLoad() {
      creditEl.style.display = imgEl.src === item.img.src ? "" : "none";
    });
    imgEl.src = `${localBase}.${localExts[0]}`;

    document.getElementById("detailCloseBtn").addEventListener("click", closeDetail);
    panel.classList.add("is-open");
    overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";

    document.querySelectorAll(".plano-hotspot").forEach((el) => {
      el.classList.toggle("is-active", el.getAttribute("data-numero") === item.numero);
    });
    document.querySelectorAll(".chip").forEach((el) => {
      el.classList.toggle("is-active", el.getAttribute("data-numero") === item.numero);
    });
  }

  function closeDetail() {
    const panel = document.getElementById("detailPanel");
    const overlay = document.getElementById("detailOverlay");
    panel.classList.remove("is-open");
    overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  /* ---------------- Cronología desplegable ---------------- */
  function initTimelineToggle() {
    const toggle = document.getElementById("timelineToggle");
    const extra = document.getElementById("timelineExtra");
    if (!toggle || !extra) return;
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      extra.hidden = expanded;
      toggle.setAttribute("aria-expanded", String(!expanded));
      toggle.firstChild.textContent = expanded
        ? "Ver cronología completa "
        : "Ver menos ";
    });
  }

  /* ---------------- Init ---------------- */
  document.addEventListener("DOMContentLoaded", () => {
    renderPlanoBgIslands();
    renderCompanionMap();
    renderNeighborhoodPlan();
    renderStreetGrid();
    renderNumberChips();
    initTimelineToggle();

    document.getElementById("detailOverlay").addEventListener("click", closeDetail);
    document.addEventListener("keydown", (ev) => {
      if (ev.key === "Escape") closeDetail();
    });

    document.body.classList.add("is-loaded");
  });
})();
