const conn=require("../config.js");

function getNhanvien(){
    const query="select * from nhanvien";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ loại nhân viên");
        console.table(result);
    })
}

getNhanvien();