const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Employee = require('./employee');

const uri =  "mongodb://root:X6GLUUDOp8AbWuJFeYu0fcWI@172.21.50.59:27017";


mongoose.connect(uri,{'dbName':'employeeDB2'})
    .then(() => {
        console.log("Connected to MongoDB");

        // insertMany records into employee
        return Employee.insertMany([
            { "emp_name": "Wen Ting ZHA", "age": 36, "location": "HK", "email": "wentingzha881030@gmail.com" },
            { "emp_name": "Matt Aniston", "age": 25, "location": "Houston", "email": "matta@somewhere.com" },
            { "emp_name": "Monica Perry", "age": 23, "location": "New Jersey", "email": "monicap@somewhere.com" },
            { "emp_name": "Rachel Tribbiani", "age": 28, "location": "Boston", "email": "rachelt@somewhere.com" }
        ]);
    })
    .then(() => {
        console.log("Records inserted successfully");

        // Find all documents in employees collection after insertMany
        return Employee.find();
    })
    .then((data) => {
        console.log("\nDocuments in employees collection after insertMany:");
        console.log(data);
    })
    .catch((error) => {
        console.error("Error:", error);
    })
    .finally(() => {
        mongoose.connection.close(); // Close the MongoDB connection
    });