const conn=require("../config.js");

function getPhieuxuat(){
    const query="select * from phieuxuat";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Dữ liệu từ loại Phiếu xuấ");
        console.table(result);
    })
}

getPhieuxuat();