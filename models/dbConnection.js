require("dotenv").config({ debug: process.env.DEBUG })
const Connection = require('tedious').Connection;

var config = {  
    server: process.env.HOST,  //update me
    authentication: {
        type: 'default',
        options: {
            userName: process.env.DBUSERNAME, 
            password: process.env.DBPASSWORD  
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
       database: process.env.DATABASE  //update me
    }
};  

const openDbConnection =(request)=> {
   var connection = new Connection(config);
    connection.connect();
    connection.on('connect',  function(err) {
       if (err) {
            console.log('in sujeet error');
            //connection.close();
            return false;
        }
        else{
            connection.execSql(request);
          
}
    });
    connection.close();
   }

/*async function insertDataToTable(connection,request){
    console.log('####################');
    //console.log(request)
    console.log('##########################');
    connection.execSql(request);
    //closeDbConnection(connection);
  //  res.send('MF000');

}*/
/*const closeDbConnection= ()=>{
    connection.close();
}*/

module.exports.openDbConnection= openDbConnection;
//module.exports.insertDataToTable= insertDataToTable;
//module.exports.closeDbConnection=closeDbConnection;
    
/*var connection = new Connection(config);
connection.connect();
connection.on('connect',  function(err) {
    if (err) {
    console.log(err);
    } else {
     
   // connection.close();
    }
});*/