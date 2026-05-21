# 🛠️ Cotizador Web Inteligente 2026 (ERP a Medida)

Este proyecto es un sistema de cotización web responsivo y automatizado, diseñado para reemplazar las hojas de cálculo tradicionales. Permite generar presupuestos ágiles divididos en 7 ítems independientes, estructurando materiales, desgloses de Mano de Obra en Horas-Hombre (hh), transportes y cálculo automático de impuestos, todo bajo una arquitectura costo $0 alojada en **GitHub Pages**.

El sistema cuenta con **dos métodos de captura de datos de alta velocidad (Scraping Visual)** para extraer información directamente desde las webs de proveedores como Sodimac, Easy, Mercado Libre, entre otros.

---

## 🚀 Características Principales

* **Estructura de 7 Ítems:** Réplica exacta del formato comercial 2026, incluyendo campos de encabezado (*Atención a, Obra, Fecha*) y pie de presupuesto con cálculos automáticos (*NETO, IVA 19% y TOTAL*).
* **Desglose de Mano de Obra (hh):** Sub-tablas dinámicas por cada ítem que multiplican *Horas × Valor Hora* por especialidad, garantizando transparencia absoluta ante el cliente.
* **Persistencia Local y Autonumerador:** Sistema correlativo automático (Ej: `2026-0001`) y almacenamiento histórico que no requiere bases de datos de pago (usa `localStorage`).
* **Motor de Predicción Asistida (Garantía 30 días):** Si compraste un material hace menos de 30 días, el sistema te sugiere el precio en verde tenue. Además, asocia conceptos (ej: si escribes "Tubo PVC 110", te sugerirá "Tee PVC 110" en la siguiente línea).
* **Documentación de Obra:** Módulo interactivo para adjuntar imágenes, videos o planos descriptivos de la ejecución.
* **Exportación Profesional:** Generación de informes en PDF limpios y estéticos listos para enviar por Correo o WhatsApp.

---

## 📐 Métodos de Scraping Visual (Captura de Datos)

El sistema resuelve las limitaciones de seguridad de los navegadores mediante dos canales:

### 1. Extensión de Chrome (`Ctrl + Click`)
Inyecta un script en la pestaña del proveedor. Al presionar `Ctrl + Click` sobre el producto, la extensión aísla de forma inteligente el Nombre, busca patrones de precio (`$`) y el SKU, inyectándolos automáticamente en la fila activa del cotizador y dejando el foco listo en la casilla *Cantidad*.

### 2. Caja de Parseo Inteligente (`Doble Click`)
**Plan B Infalible / Modo Celular:** Al hacer doble clic en la celda "DETALLE" de cualquier fila, se despliega una ventana flotante con un cuadro de texto. Copia todo el texto en bruto de la página del proveedor (`Ctrl + A` -> `Ctrl + C`), pégalo en la caja y el algoritmo aislará jerárquicamente el SKU (evitando confundirse con medidas), el detalle y el precio de forma automática.

---

## 📁 Estructura del Proyecto

```text
├── index.html               # Aplicación Web principal (Frontend + Lógica de Predicción)
├── README.md                # Documentación del proyecto (Este archivo)
└── extension/               # Carpeta exclusiva de la Extensión de Chrome
    ├── manifest.json        # Configuración de permisos de la extensión (V3)
    └── content.js           # Script de escucha de eventos del mouse (Ctrl + Click)




---

## 🗺️ Hoja de Ruta (Roadmap) & Ecosistema FreeStik

Este cotizador web ha sido desarrollado inicialmente como un módulo independiente de alto rendimiento para portafolio profesional, diseñado bajo una arquitectura modular que permitirá su futura integración nativa dentro del ecosistema **FreeStik**.

* [x] **Fase 1:** Core del cotizador interactivo en arquitectura costo $0 (GitHub Pages).
* [x] **Fase 2:** Motores de Scraping Visual (Extensión Chrome + Caja de Parseo).
* [ ] **Fase 3:** Estandarización de APIs de exportación para compatibilidad con FreeStik.
* [ ] **Fase 4:** Sincronización en la nube y base de datos centralizada de proveedores.

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Esto significa que eres libre de usar, modificar y distribuir el código, siempre y cuando se mantenga el desglose de derechos autorales. Consulta el archivo [LICENSE](LICENSE) para más detalles.
