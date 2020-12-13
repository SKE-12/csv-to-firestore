# CSV to Firebase

Ultimate Fast CLI to migrate your csv data to Firebase Firestore!!!

## Installation

```
npm i -g csv-to-firestore
```

## Usage

### Preparation

Move your CSV file and your Google Service Account ([Step to get Service Account](https://cloud.google.com/docs/authentication/production)) into the same directory

### Configuration File

Before start, you have to write your own configuration file like the following template.

```js

module.exports = {
    path: 'example.csv', // Your CSV file name
    firebase: {
        credential: 'serviceAccount.json', // Your service account file name
        collection: 'sample', // target Collection in Firestore
    },
    csv: {
        // csvtojson ConverterOptions configuration
    }
    mapper: (dataFromCSV) => { // Mapper Method as optional field
        return dataFromCSV // Return data for saving in Firestore
    }
}
```

### Let's Transfer!

In your Terminal or CMD run the following command.

```
csv-to-firestore -c <your-js-config-file> // or
csv-to-firestore --config <your-js-config-file>
```

### Result

```
✔ Config File is ready !
✔ Data from CSV is ready !
✔ Firebase Admin is ready !
✔ Firebase Data Transfer Successfully !
```
