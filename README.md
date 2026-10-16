# Perrimón

Las cuentas en pareja, a la murciana (perricas + limón): la regla 50/30/20 para cada persona, de nómina a nómina, con los gastos comunes a medias.

Perrimón es una app web instalable (PWA). No guarda datos en ningún servidor: cada pareja usa su propia copia de la plantilla de Google Sheets como base de datos, y la app habla directamente con el script de esa hoja, protegido con una clave.

## Cómo se usa

1. Haz tu copia de la plantilla de Google Sheets y sigue su pestaña **Instrucciones** (nombres, ingresos, día de cobro, clave y script).
2. Abre la app, pega la URL del script (termina en `/exec`) y la clave de Ajustes (B47).
3. Añádela a la pantalla de inicio: en iPhone, Safari → Compartir → Añadir a pantalla de inicio; en Android, Chrome → menú → Instalar app.

## Check list de recibos

La pestaña **Check list** de la app muestra los recibos que tocan en cada periodo y los tacha solos cuando aparecen en la hoja.

1. En vuestra hoja, crea la pestaña **Check list** con estas columnas: Concepto · Importe (vacío = variable) · Quién · Gasto o ingreso · Día del mes · Meses (vacío = todos; por ejemplo `1,4,7,10`) · Palabras para reconocerlo · Acepta Bizum · Desde (AAAA-MM) · Nº de pagos · Nota.
2. Un recibo se tacha cuando un movimiento contiene alguna de sus palabras y, si tiene importe, coincide con él (±10 %). Los Bizum y transferencias solo cuentan si pones «Sí» en Acepta Bizum. Los ingresos se reconocen por el importe y suman como ingreso extra en el 50/30/20 de su persona.
3. En **Ajustes, columna D** (filas 4 y 5) va la nómina de junio y diciembre con la paga extra. En esos meses sustituye a la nómina normal.
4. Pega `apps-script/checklist.gs` en el script de la hoja siguiendo las instrucciones de su cabecera y crea una nueva versión de la implementación (la URL /exec no cambia).

## Archivos

- `index.html`: la app completa.
- `manifest.webmanifest`: nombre, icono y colores para instalarla.
- `sw.js`: guarda la app en el móvil para que abra rápido y sin conexión.
- `apps-script/checklist.gs`: añadido para el script de la hoja (check list y paga extra).
- `icon-*.png`, `apple-touch-icon.png`: iconos.
