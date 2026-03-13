const XLSX = require('xlsx');
const path = require('path');

try {
    const file1 = path.resolve('../data/LCM-Viaturas - out25.xls');
    const wb1 = XLSX.readFile(file1);
    const sheet1 = wb1.Sheets[wb1.SheetNames[0]];
    const rows1 = XLSX.utils.sheet_to_json(sheet1, { header: 1 });
    console.log("OUT25 first 10 rows:");
    for (let i = 0; i < 10 && i < rows1.length; i++) {
        console.log(`Row ${i}:`, JSON.stringify(rows1[i]));
    }
} catch (e) {
    console.error("Error reading file:", e);
}
