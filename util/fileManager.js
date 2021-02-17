const fs = require('fs')
const jsonToCSV = require('./jsonToCsv')

class CsvManager {
  toCSV (obj) {
    return jsonToCSV(obj, {includeHeaders: true})
  }

  toCSVWithoutHeader (obj) {
    return jsonToCSV(obj, {includeHeaders: false})
  }

  async appendToFile(file, data) {
    return fs.appendFileSync(file, '\r\n' + data, { encoding: 'utf8' })
  }

  async saveToFile (file, data) {
    return fs.writeFileSync(file, '\ufeff' + data, { encoding: 'utf8' })
  }
  
  deleteFile (file) {
    fs.unlinkSync(file)
  }
}

module.exports = CsvManager