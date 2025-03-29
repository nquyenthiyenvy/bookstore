import express from 'express';
import db from '../db.mjs.js';

const router = express.Router();

router.get('/khachhang', (req, res) => {
    const sql = 'SELECT * FROM khachhang';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn database:', err);
            return res.status(500).json({ error: 'Lỗi server' });
        }
        res.json(results);
    });
});
router.post('/khachhang', (req, res) => {
    const { HoTen, DiaChi, SoDienThoai, Email } = req.body;
    if (!HoTen || !DiaChi || !SoDienThoai || !Email) {
        return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
    }

    const sql = 'INSERT INTO khachhang (HoTen, DiaChi, SoDienThoai, Email) VALUES (?, ?, ?, ?)';
    
    db.query(sql, [HoTen, DiaChi, SoDienThoai, Email], (err, result) => {
        if (err) {
            console.error('Lỗi khi thêm khách hàng:', err);
            return res.status(500).json({ error: 'Lỗi server' });
        }
        res.status(201).json({ message: 'Thêm khách hàng thành công!', id: result.insertId });
    });
});


router.delete('/khachhang/:id', async (req, res) => {
    const { id } = req.params;
    console.log("ID nhận được:", id);

    try {
        const check = await db.query('SELECT * FROM khachhang WHERE id_KhachHang = ?', [id]);
        console.log("Khách hàng tìm thấy:", check);

        if (!Array.isArray(check) || check.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
        }

        const result = await db.query('DELETE FROM khachhang WHERE id_KhachHang = ?', [id]);
        console.log("Kết quả DELETE:", result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
        }

        return res.json({ message: 'Xóa khách hàng thành công!' });
    } catch (error) {
        console.error('Lỗi khi xóa khách hàng:', error);
        return res.status(500).json({ error: error.message });
    }
});
  
router.put('/khachhang/:id', async (req, res) => {
    const { id } = req.params;
    const { HoTen, DiaChi, SoDienThoai, Email } = req.body;

    console.log("ID khách hàng nhận được:", id);
    console.log("Dữ liệu cần cập nhật:", { HoTen, DiaChi, SoDienThoai, Email });

    try {
        const check = await db.query('SELECT * FROM khachhang WHERE id_KhachHang = ?', [id]);
        console.log("Kết quả tìm khách hàng:", check);

        if (!Array.isArray(check) || check.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
        }

        const result = await db.query(
            'UPDATE khachhang SET HoTen = ?, DiaChi = ?, SoDienThoai = ?, Email = ? WHERE id_KhachHang = ?',
            [HoTen, DiaChi, SoDienThoai, Email, id]
        );
        console.log("Kết quả UPDATE:", result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Không thể cập nhật khách hàng' });
        }

        return res.json({ message: 'Cập nhật khách hàng thành công!' });
    } catch (error) {
        console.error('Lỗi khi cập nhật khách hàng:', error);
        return res.status(500).json({ error: 'Lỗi server' });
    }
});

export default router;
