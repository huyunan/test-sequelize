const { Workbook } = require("exceljs");
async function export_excel() {
  const workbook = new Workbook();
  const export_sheet = workbook.addWorksheet("export");
  const header_name = ["No.", "商品ID", "商品名", "商品种类", "商品价格"];
  const header_comment = [
    "",
    "#数字",
    "#字符串(最长128位)",
    "#字符串(最长40位)",
    "#数字",
  ];
  const export_data = [
    {
      goodsID: 2001,
      goodsName: "苹果",
      goodsKind: "水果",
      price: 5,
    },
    {
      goodsID: 2002,
      goodsName: "白梨",
      goodsKind: "水果",
      price: 3,
    },
    {
      goodsID: 2003,
      goodsName: "韭菜",
      goodsKind: "蔬菜",
      price: 2,
    },
    {
      goodsID: 2004,
      goodsName: "茄子",
      goodsKind: "蔬菜",
      price: 4,
    },
  ];
  const export_width = [5, 20, 20, 20, 20];
  for (let i = 1; i < header_name.length + 1; i++) {
    export_sheet.getColumn(i).width = export_width[i - 1];
    export_sheet.getCell(1, i).value = header_name[i - 1];
    export_sheet.getCell(1, i).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "f59e5d" },
    };
    export_sheet.getCell(2, i).value = header_comment[i - 1];
    export_sheet.getCell(2, i).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "f59e5d" },
    };
  }
  export_sheet.getRow(2).height = 40;
  // データ挿入
  for (let i = 3; i < export_data.length + 3; i++) {
    export_sheet.getCell(i, 1).value = i - 2;
    export_sheet.getCell(i, 2).value = export_data[i - 3].goodsID;
    export_sheet.getCell(i, 3).value = export_data[i - 3].goodsName;
    export_sheet.getCell(i, 4).value = export_data[i - 3].goodsKind;
    export_sheet.getCell(i, 5).value = export_data[i - 3].price;
  }
  // 罫線挿入
  for (let i = 1; i < export_data.length + 3; i++) {
    for (let j = 1; j < header_name.length + 1; j++) {
      export_sheet.getCell(i, j).border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    }
  }
  await workbook.xlsx.writeFile(`./upload/export.xlsx`);
}
export_excel();
