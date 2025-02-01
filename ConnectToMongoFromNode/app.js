const mongoose = require('mongoose');
const Employee = require('./employee1');

const uri =  "mongodb://root:X6GLUUDOp8AbWuJFeYu0fcWI@172.21.50.59:27017";

mongoose.connect(uri,{'dbName':'employeeDB1'});

Employee.find().then((data)=>{
            console.log(data);
            mongoose.connection.close()
        })