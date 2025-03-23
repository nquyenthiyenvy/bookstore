const conn=require("../config.js");

function getHanghoa(){
    const query="select * from hanghoa";
    conn.query(query,function(error,result){
        if(error) throw error;
        console.log("Du lieu thu hang hoa");
        console.table(result);
    })
}

getHanghoa();