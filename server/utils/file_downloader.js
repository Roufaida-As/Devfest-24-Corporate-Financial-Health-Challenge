const fs = require('fs');

function downloadFile(buffer, filename) {

    fs.writeFile(filename, buffer, (err) => {
        if (err) {
            console.error('Error saving the file:', err);
        } else {
            console.log('File saved successfully:', filename);
        }
    });
}

module.exports = downloadFile;
