# CSV to Firebase [EN]

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
=====

# แปลง CSV ใส่ Firebase [TH]

ขั้นตอนง่ายๆที่จะแปลงไฟล์ csv เข้าไปยัง firestore ของ Firebase

## วิธีการติดตั้ง

พิมพ์คำสั่งแค่นี้ก็ใช้ได้เลย
```
npm i -g csv-to-firestore
```

## การใช้งาน

### การเตรียม

ก่อนอื่นเลยให้ย้ายไฟล์ Csv ไปอยู่ตำแหน่งเดียวกันกับที่ Google service account ก่อน โดยขั้นตอนสามารถทำได้ตามลิงก์นี้([Step to get Service Account](https://cloud.google.com/docs/authentication/production))

### ปรับแต่งไฟล์

ถัดมา ก่อนจะเริ่มโปรแกรมนี้ อาจจะต้องขอให้คุณเขียนคำสั่งข้างล่างนี้ที่ไฟล์configก่อนนะ

```js

module.exports = {
    path: 'example.csv', // Your CSV file name
    firebase: {
        credential: 'serviceAccount.json', // Your service account file name
        collection: 'sample', // target Collection in Firestore
    },
    mapper: (dataFromCSV) => { // Mapper Method as optional field
        return dataFromCSV // Return data for saving in Firestore
    }
}
```

### ย้ายไฟล์กันเถอะ!

หลังจากตั้งค่าเสร็จแล้ว ก็รันคำสั่งข้างล่างนี้ในหน้าต่าง Terminal หรือ CMD เลย

```
csv-to-firestore -c <your-js-config-file> // or
csv-to-firestore --config <your-js-config-file>
```

### ผลลัพธ์ที่ได้

หน้าตาหลังจากรันแล้วก็จะออกมาตามนี้
```
✔ Config File is ready !
✔ Data from CSV is ready !
✔ Firebase Admin is ready !
✔ Firebase Data Transfer Successfully !
```

แค่นี้ก็ย้ายไฟล์เสร็จแล้วล่ะ