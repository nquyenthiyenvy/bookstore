import dotenv from 'dotenv';
dotenv.config({ path: './api_sever/.env' });
import mysql from 'mysql';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bookstore'
  });

db.connect((err)=>{
    if(err){
        console.log('loi ket noi');
        return;
    }
    console.log('ket noi thanh cong');
});

export default db;