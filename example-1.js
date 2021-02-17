/**
 * Write to CSV one time with headers
 */

const path = require('path')
const CsvManager = require ('./util/fileManager')

var myJson = [
  {
    'product': 123,
    'items': [
      {
        'id': 1,
        'name': 'item 1'
      },
      {
        'id': 2,
        'name': 'item 2'
      }
    ]
  },
  {
    'product': 321,
    'items': [
      {
        'id': 3,
        'name': 'item 3'
      },
      {
        'id': 4,
        'name': 'item 4'
      }
    ]
  }
]

// JSON to CSV example
MyFunction()

async function MyFunction() {
  const csvControler = new CsvManager()
  const csv = await csvControler.toCSV(myJson)
  await csvControler.saveToFile(path.join(__dirname,'example-1.csv'), csv)
}

