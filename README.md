# Perrimón

Las cuentas en pareja, a la murciana (perricas + limón): la regla 50/30/20 para cada persona, de nómina a nómina, con los gastos comunes a medias.

Perrimón es una app web instalable (PWA). No guarda datos en ningún servidor: cada pareja usa su propia copia de la plantilla de Google Sheets como base de datos, y la app habla directamente con el script de esa hoja, protegido con una clave.

## Cómo se usa

1. Haz tu copia de la plantilla de Google Sheets y sigue su pestaña **Instrucciones** (nombres, ingresos, día de cobro, clave y script).
2. Abre la app, pega la URL del script (termina en `/exec`) y la clave de Ajustes (B47).
3. Añádela a la pantalla de inicio: en iPhone, Safari → Compartir → Añadir a pantalla de inicio; en Android, Chrome → menú → Instalar app.

## Archivos

- `index.html`: la app completa.
- `manifest.webmanifest`: nombre, icono y colores para instalarla.
- `sw.js`: guarda la app en el móvil para que abra rápido y sin conexión.
- `icon-*.png`, `apple-touch-icon.png`: iconos.
