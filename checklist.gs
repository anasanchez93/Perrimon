/**
 * Perrimón — check list de recibos y paga extra.
 *
 * Añade a la respuesta de «datos» la pestaña «Check list» de la hoja y la
 * columna D de Ajustes (nómina de junio y diciembre con la paga extra).
 *
 * Cómo instalarlo (una sola vez):
 *  1. En la hoja: Extensiones → Apps Script.
 *  2. En el archivo donde está tu función doPost, cámbiale el nombre a doPostPerrimon
 *     (solo el nombre: «function doPost(e)» pasa a ser «function doPostPerrimon(e)»).
 *  3. Crea un archivo nuevo (+ → Secuencia de comandos), llámalo «checklist» y pega este código.
 *  4. Implementar → Gestionar implementaciones → lápiz → Versión: «Nueva versión» → Implementar.
 *     Así la URL /exec sigue siendo la misma y no hay que volver a conectar los móviles.
 */

function doPost(e) {
  var salida = doPostPerrimon(e);
  try {
    var peticion = JSON.parse(e.postData.contents);
    if (peticion.accion !== 'datos') return salida;
    var datos = JSON.parse(salida.getContent());
    if (!datos.ok) return salida;
    datos.checklist = checklistPerrimon_();
    return ContentService.createTextOutput(JSON.stringify(datos)).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return salida; // si algo falla aquí, la app sigue funcionando como antes
  }
}

function checklistPerrimon_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var recibos = [];
  var hoja = ss.getSheetByName('Check list');
  if (hoja && hoja.getLastRow() > 1) {
    recibos = hoja.getRange(2, 1, hoja.getLastRow() - 1, 11).getDisplayValues()
      .filter(function (r) { return String(r[0]).trim() !== ''; })
      .map(function (r) {
        return {
          concepto: r[0], importe: r[1], quien: r[2], movimiento: r[3], dia: r[4], meses: r[5],
          palabras: r[6], bizum: r[7], desde: r[8], pagos: r[9], nota: r[10]
        };
      });
  }
  var ajustes = ss.getSheetByName('Ajustes');
  var nominaExtra = ajustes ? ajustes.getRange('D4:D5').getDisplayValues().map(function (r) { return r[0]; }) : ['', ''];
  return { recibos: recibos, nominaExtra: nominaExtra };
}
