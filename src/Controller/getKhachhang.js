const conn=require("../config.js");

function getKhachhang(){
    const query="select * from khachhang";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ khách hàng");
        console.table(result);
    })
}

getKhachhang();