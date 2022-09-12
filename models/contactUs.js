/*var Request = require('tedious').Request;
var TYPES = require('tedious').TYPES;
var dbObject=require('./dbConnection.js');


const insertContactUsData= (req,res) =>{
    
   // console.log(Connection)
    console.log("***************************************")
    console.log(req.body)
    
    var firstName =req.body.firstName;
    var lastName=req.body.lastName;
    var email=req.body.email;
    var phoneNumber=req.body.phone;
    var message =req.body.message;
    console.log(phoneNumber)
    //dbObject.openDbConnection();
    var sql='INSERT INTO ContactUS (FirstName,Email,LastName,PhoneNumber,Message) VALUES (@firstName,@email,@lastName,@phoneNumber,@message)';
    const request = new Request(sql,(err, rowCount , rows) => {
        if (err) {
            console.log(err)
        throw err;
        }
    });
request.addParameter('firstName', TYPES.NVarChar, firstName);
request.addParameter('email', TYPES.NVarChar, email);
request.addParameter('lastName', TYPES.NVarChar, lastName);
request.addParameter('phoneNumber', TYPES.Int, phoneNumber);
request.addParameter('message', TYPES.NVarChar, message);
var connection=dbObject.openDbConnection(res,request);
//dbObject.insertDataToTable(res,request,connection);

res.send('MF000')
};

module.exports.insertContactUsData = insertContactUsData;*/