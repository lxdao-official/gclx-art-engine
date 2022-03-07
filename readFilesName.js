const fs = require('fs');

const selectedFiles = './selected/';
const selectedIds = [];

fs.readdir(selectedFiles, (err, files) => {
  files.forEach((file) => {
    selectedIds.push(file.split('.')[0]);
  });
  console.log('selectedIds', selectedIds);
});
