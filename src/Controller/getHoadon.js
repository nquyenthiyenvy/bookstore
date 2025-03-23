const conn=require("../config.js");

function getHoadon(){
    const query="select * from hoadon";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ Hóa đơn");
        console.table(result);
    })
}

getHoadon();