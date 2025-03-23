var mysql= require("mysql")

var conn=mysql.createConnection({
    host:"localhost",
        user:"root",
        password:"",
        database:"bansach"
});

conn.connect(function(error){
    if(error) throw error
    console.log("Kết nối thành công")
});

module.exports=conn;