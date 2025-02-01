const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const vendorPaymentsRouter = require('./routes/vendor_payment');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connect to MongoDB
const uri =  "mongodb://root:X6GLUUDOp8AbWuJFeYu0fcWI@172.21.50.59:27017";
mongoose.connect(uri, {'dbName': 'transactionsDB'});

// Use Vendor Payments routes
app.use('/vendorPayments', vendorPaymentsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});