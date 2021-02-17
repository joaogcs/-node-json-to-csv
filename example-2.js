/**
 * Write to CSV multiple times with and without headers
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

// Append JSON to CSV example
MyFunctionWithLoop()

async function MyFunctionWithLoop() {
  const file = path.join(__dirname,'example-2.csv')
  let counter = 0;
  const csvControler = new CsvManager()
  do {
    try {
      if (myJson.length > 0) {
        if (counter === 0) {
          // writing to CSV with headers
          const csv = await csvControler.toCSV(myJson)
          await csvControler.saveToFile(file, csv)

        } else {
          // writing to CSV without headers
          const csv = await csvControler.toCSVWithoutHeader(myJson)
          await csvControler.appendToFile(file, csv)

        }
      }
      counter++
    } catch (error) {
      console.error (error)
      return 1 // exit loop
    }
  } while (myJson.length > 0)
}

