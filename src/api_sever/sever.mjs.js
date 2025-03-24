import dotenv from 'dotenv';
dotenv.config({ path: './api_sever/.env' });
import express from 'express';
import hanghoaRouter from './routes/HanghoaRouter.js';
import hoadonRouter from './routes/hoadonRouter.js';
import khachhangRouter from './routes/khachhangRouter.js';
import loaihanghoaRouter from './routes/loaihanghoaRouter.js';
import nhanvienRouter from './routes/nhanvienRouter.js';
import nhasanxuatRouter from './routes/nhasanxuatRouter.js';
import phieuxuatRouter from './routes/phieuxuatRouter.js';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Server is running!');
});
app.use('/api', hanghoaRouter);
app.use('/api', hoadonRouter);
app.use('/api', khachhangRouter);
app.use('/api', loaihanghoaRouter);
app.use('/api', nhanvienRouter);
app.use('/api', nhasanxuatRouter);
app.use('/api', phieuxuatRouter);


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});


//bật Wamsever
//trong console->node Api_Sever/sever.js de chay
//dán duong dan
//http://localhost:3000/api/hanghoa
//http://localhost:3000/api/hoadon
//http://localhost:3000/api/khachhang
//http://localhost:3000/api/loaihanghoa
//http://localhost:3000/api/nhanvien
//http://localhost:3000/api/nhasanxuat
//http://localhost:3000/api/phieuxuat