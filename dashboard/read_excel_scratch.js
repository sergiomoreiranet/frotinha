const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, '..', 'data', 'MAPA FORÇA - SAF 2025 BACKUP MARÇO.xlsx');
const logPath = path.join(__dirname, 'excel_logs.txt');
let logContent = '';

try {
  const workbook = xlsx.readFile(filePath);
  logContent += 'Abas encontradas:\n' + workbook.SheetNames.join('\n') + '\n\n';

  workbook.SheetNames.forEach(sheetName => {
    const sheet = workbook.Sheets[sheetName];
    if (!sheet['!ref']) return;
    
    const range = xlsx.utils.decode_range(sheet['!ref']);
    const C = range.s.c;
    const R = range.s.r; // linha 0 (primeira linha do excel)
    const R1 = range.s.r + 1; // linha 1 (segunda linha)
    const R2 = range.s.r + 2; // linha 2 (terceira linha)
    
    let headersR0 = [];
    let headersR1 = [];
    let headersR2 = [];

    for (let col = C; col <= range.e.c; ++col) {
      const cell0 = sheet[xlsx.utils.encode_cell({c: col, r: R})];
      const cell1 = sheet[xlsx.utils.encode_cell({c: col, r: R1})];
      const cell2 = sheet[xlsx.utils.encode_cell({c: col, r: R2})];

      if (cell0 && cell0.v) headersR0.push(`Col ${col}: ${cell0.v}`);
      if (cell1 && cell1.v) headersR1.push(`Col ${col}: ${cell1.v}`);
      if (cell2 && cell2.v) headersR2.push(`Col ${col}: ${cell2.v}`);
    }
    
    logContent += `\n= Aba "${sheetName}" =\n`;
    logContent += `Linha 1:\n${headersR0.join(' | ')}\n`;
    logContent += `Linha 2:\n${headersR1.join(' | ')}\n`;
    logContent += `Linha 3:\n${headersR2.join(' | ')}\n`;
  });
  
  fs.writeFileSync(logPath, logContent);
  console.log('Finalizado, confira', logPath);
} catch (error) {
  console.error('Erro ao ler o arquivo Excel:', error.message);
}
