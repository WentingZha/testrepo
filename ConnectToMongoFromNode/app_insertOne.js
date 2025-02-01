const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Employee = require('./employee');

const uri =  "mongodb://root:X6GLUUDOp8AbWuJFeYu0fcWI@172.21.50.59:27017";

mongoose.connect(uri,{'dbName':'employeeDB2'});

//insertOne record into employee
let newEmployee = new Employee({
    emp_name: 'John Doe',
    age: 37,
    location: "Illinois",
    email: "jdoe@somewhere.com"
});
newEmployee.save().then(function(){
    Employee.find().then((data)=>{
        console.log("\n\nDocuments in employees collection after insertOne")
        console.log(data);
        mongoose.connection.close();
    })
}).catch(function(error){
    console.log(error)
});