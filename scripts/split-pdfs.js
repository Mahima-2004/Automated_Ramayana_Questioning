const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function splitPDF(inputPath, outputPath, startPage, endPage) {
  try {
    const existingPdfBytes = fs.readFileSync(inputPath);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    
    const newPdf = await PDFDocument.create();
    
    // Copy pages from startPage to endPage (1-indexed, so subtract 1)
    const pages = await newPdf.copyPages(pdfDoc, Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage - 1 + i));
    
    pages.forEach((page) => {
      newPdf.addPage(page);
    });
    
    const pdfBytes = await newPdf.save();
    fs.writeFileSync(outputPath, pdfBytes);
    console.log(`✓ Created: ${outputPath} (pages ${startPage}-${endPage})`);
  } catch (error) {
    console.error(`✗ Error splitting ${inputPath}:`, error.message);
  }
}

async function splitAllPDFs() {
  const chaptersDir = path.join(__dirname, '../public/chapters');
  
  console.log('Starting PDF splitting process...\n');
  
  // English Volume 1: Bala-Ayodhya Kanda
  const vol1Path = path.join(chaptersDir, 'Ramayana-VOL-1-Bala-Ayodhya-Kanda.pdf');
  
  // Bala Kanda: pages 1-185
  await splitPDF(
    vol1Path,
    path.join(chaptersDir, 'English-Bala-Kanda.pdf'),
    1,
    185
  );
  
  // Ayodhya Kanda: pages 186-507
  await splitPDF(
    vol1Path,
    path.join(chaptersDir, 'English-Ayodhya-Kanda.pdf'),
    186,
    507
  );
  
  // English Volume 2: Aranya-Kishkindha-Sundara Kanda
  const vol2Path = path.join(chaptersDir, 'Ramayana-VOL-2-Aranya-Kishkindha-Sundara-Kanda.pdf');
  
  // Aranya Kanda: pages 10-195
  await splitPDF(
    vol2Path,
    path.join(chaptersDir, 'English-Aranya-Kanda.pdf'),
    10,
    195
  );
  
  // Kishkindha Kanda: pages 196-377
  await splitPDF(
    vol2Path,
    path.join(chaptersDir, 'English-Kishkindha-Kanda.pdf'),
    196,
    377
  );
  
  // Sundara Kanda: pages 378-603
  await splitPDF(
    vol2Path,
    path.join(chaptersDir, 'English-Sundara-Kanda.pdf'),
    378,
    603
  );
  
  // English Volume 3: Yuddha Kanda (full volume - just copy)
  const vol3Path = path.join(chaptersDir, 'Ramayana-VOL-3-Yuddha-Kanda.pdf');
  const vol3Output = path.join(chaptersDir, 'English-Yuddha-Kanda.pdf');
  if (fs.existsSync(vol3Path)) {
    fs.copyFileSync(vol3Path, vol3Output);
    console.log(`✓ Created: ${vol3Output} (full volume)`);
  }
  
  // English Volume 4: Uttara Kanda (full volume - just copy)
  const vol4Path = path.join(chaptersDir, 'Ramayana-VOL-4-Uttara-Kanda.pdf');
  const vol4Output = path.join(chaptersDir, 'English-Uttara-Kanda.pdf');
  if (fs.existsSync(vol4Path)) {
    fs.copyFileSync(vol4Path, vol4Output);
    console.log(`✓ Created: ${vol4Output} (full volume)`);
  }
  
  console.log('\n✓ PDF splitting completed!');
}

splitAllPDFs().catch(console.error);



