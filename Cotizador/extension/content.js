(function () {
  'use strict';

  if (document.getElementById('items-container')) return;

  document.addEventListener('click', (e) => {
    if (!e.ctrlKey && !e.metaKey) return;
    e.preventDefault();
    e.stopPropagation();

    const el = e.target;
    const zone = el.closest(
      '[class*="product"],[class*="item"],[class*="card"],article,li,tr,[data-product]'
    ) || el;

    const detalle = (zone.innerText || zone.textContent || el.innerText || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 400);

    let precio = 0;
    const priceNode = zone.querySelector?.(
      '[class*="price"],[class*="precio"],[data-price],[itemprop="price"]'
    ) || el.closest('[class*="price"],[class*="precio"]');
    const priceText = (priceNode?.textContent || zone.textContent || '').trim();
    const priceMatch = priceText.match(/\$\s*([\d]{1,3}(?:[.\s]\d{3})*(?:,\d+)?|\d+(?:,\d+)?)/);
    if (priceMatch) {
      precio = parseInt(priceMatch[1].replace(/[.\s]/g, '').replace(',', ''), 10) || 0;
    }

    const sku = 'CV' + Date.now().toString(36).slice(-6).toUpperCase();

    const datos = { type: 'COTIZADOR_MATERIAL', sku, detalle, precio };

    if (window.opener && !window.opener.closed) {
      window.opener.postMessage(datos, '*');
      flash('Enviado al cotizador');
    } else {
      flash('Abre el proveedor desde 🛒 Buscar en Proveedor del cotizador');
    }
  }, true);

  function flash(msg) {
    let t = document.getElementById('capturador-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'capturador-toast';
      t.style.cssText = 'position:fixed;bottom:16px;right:16px;z-index:2147483647;background:#111;color:#fff;padding:10px 14px;border-radius:8px;font:12px sans-serif;max-width:260px;';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.style.display = 'block';
    clearTimeout(t._t);
    t._t = setTimeout(() => { t.style.display = 'none'; }, 2500);
  }
})();
