const { readFile, utils } = require('xlsx');
async function import_excel() {
  const workbook = readFile(`./upload/export.xlsx`);
  const import_date = await readXlsxSheet(workbook, 'export');
  console.log(import_date);
}
async function readXlsxSheet(workbook, sheetName) {
  try {
    const xlsxSheet = workbook.Sheets[sheetName];
    const range = utils.decode_range(xlsxSheet['!ref']);
    const columnHeader = [];
    for (let columnCnt = 1; columnCnt <= range.e.c; columnCnt++) {
      const ADR = utils.encode_cell({ c: columnCnt, r: 0 });
      columnHeader.push(xlsxSheet[ADR].v);
    }
    const jsonData = utils.sheet_to_json(xlsxSheet);
    const rowData = [];
    for (let rowCnt = 1; rowCnt < jsonData.length; rowCnt++) {
      rowData.push(jsonData[rowCnt]);
    }
    return {head: columnHeader, data: rowData};
  } catch {
    return {head: [], data: []};
  }
}
import_excel();
