const jsonexport = require('jsonexport');

async function jsonToCSV (json, options) {
  options = {
    ...{
      rowDelimiter: ';',
      fillGaps: true,
      fillTopRow: true,
      undefinedString: '-',
      arrayPathString: ';\n'
    },
    ...options
  }
  return jsonexport(json, options)
}

module.exports = jsonToCSV