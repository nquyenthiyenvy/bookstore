const conn=require("../config.js");

function getNhaxanxuat(){
    const query="select * from nhasanxuat";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ loại Nhà sản xuất");
        console.table(result);
    })
}

getNhaxanxuat();