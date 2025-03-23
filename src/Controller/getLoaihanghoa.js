const conn=require("../config.js");

function getLoaihang(){
    const query="select * from loaihanghoa";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ loại hàng hóa");
        console.table(result);
    })
}

getLoaihang();