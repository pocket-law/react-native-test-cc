'use strict';
import SQLite from 'react-native-sqlite-storage';



let db = SQLite.openDatabase({ name: 'c46.db', createFromLocation: "~c46.db", location: 'Library' }, openDBHandler, errorDBHandler);

class Database  {
    getConnection() {
        return db;
    }
}

const openDBHandler = () => {
    console.log("Database OPENED");
}

const errorDBHandler = (err) => {
    console.log("SQL Error: " + err);
}


module.exports = new Database();