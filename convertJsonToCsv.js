const fs = require('fs');
const { parse } = require('json2csv');

const inputFile = 'data.json';
const outputFile = 'output.csv';

fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    process.exit(1);
  }
  try {
    const jsonData = JSON.parse(data);
    const csv = parse(jsonData);
    fs.writeFile(outputFile, csv, (err) => {
      if (err) {
        console.error("Error writing CSV file:", err);
        process.exit(1);
      }
      console.log(`CSV file successfully created at ${outputFile}`);
    });
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    process.exit(1);
  }
});
