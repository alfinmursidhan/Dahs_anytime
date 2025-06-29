const fs = require('fs');
const https = require('https');
const path = require('path');

// Create fonts directory if it doesn't exist
const fontDir = path.join(__dirname, 'public', 'fonts', 'carelia');
if (!fs.existsSync(fontDir)) {
  fs.mkdirSync(fontDir, { recursive: true });
}

// Font URLs (replace these with actual URLs if you have them)
// Note: These are placeholder URLs and will need to be replaced with real ones
const fontFiles = [
  {
    url: 'https://example.com/fonts/carelia/Carelia.woff2',
    filename: 'Carelia.woff2'
  },
  {
    url: 'https://example.com/fonts/carelia/Carelia.woff',
    filename: 'Carelia.woff'
  }
];

// Download function
function downloadFile(url, destination) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${destination}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(destination, () => {});
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(destination, () => {});
      reject(err);
    });
  });
}

// Download all font files
async function downloadFonts() {
  console.log('Downloading Carelia font files...');
  
  try {
    for (const font of fontFiles) {
      const destination = path.join(fontDir, font.filename);
      await downloadFile(font.url, destination);
    }
    console.log('All font files downloaded successfully.');
  } catch (error) {
    console.error('Error downloading font files:', error);
    console.log('');
    console.log('IMPORTANT: You need to manually download the Carelia font files and place them in:');
    console.log(fontDir);
    console.log('Required files: Carelia.woff2 and Carelia.woff');
  }
}

// Run the download
downloadFonts(); 