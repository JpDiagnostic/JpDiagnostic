var mysql= require('mysql');
require('dotenv').config();
var con= mysql.createConnection({
    host:process.env.HOST,
    user:process.env.DBUSERNAME,
    password:"",
    database:process.env.DATABASE
})
console.log(con);
console.log('*****************4444444444444444**********************')

const insertContactUsData= (req,res) =>{
    var sql="INSERT INTO ContactUS (firstName,lastName,email,phone,message) VALUES (?,?,?,?,?)"
    con.query(sql,[req.body.firstName,req.body.lastName,req.body.email,req.body.phone,req.body.message],function(err,result){
        if(err) throw err;
});
    res.send('MF000')
};

const subscribe =(req,res) =>{
    var date= new Date(Date.now());
    var sql ="INSERT INTO Subscribe (email,subscribedOn,active) VALUES(?,?,?)"
    //console.log(req.body.email);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%")
    console.log(sql)
    con.query(sql,[req.body.email, date,1],function(err,result){
        if(err) throw err;
    })
    //con.end();
    res.send('MF005');
}
module.exports.insertContactUsData = insertContactUsData;
module.exports.subscribe = subscribe;  