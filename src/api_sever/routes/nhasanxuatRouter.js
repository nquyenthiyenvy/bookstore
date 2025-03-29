import express from 'express';
import db from '../db.mjs.js';


const router = express.Router();

router.get('/nhasanxuat', (req, res) => {
    const sql = 'SELECT * FROM nhasanxuat';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn database:', err);
            return res.status(500).json({ error: 'Lỗi server' });
        }
        res.json(results);
    });
});
router.post('/nhasanxuat', async (req, res) => {
    const { TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website } = req.body;

    console.log("Dữ liệu cần thêm:", { TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website });

    try {
        const result = await db.query(
            'INSERT INTO nhasanxuat (TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website) VALUES (?, ?, ?, ?, ?)',
            [TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website]
        );
        console.log("Kết quả INSERT:", result);


        if (result.affectedRows === 0) {
            return res.status(400).json({ error: 'Không thể thêm nhà sản xuất' });
        }

        return res.status(201).json({
            message: 'Thêm nhà sản xuất thành công!',
            id_NhaSanXuat: result.insertId,
        });
    } catch (error) {
        console.error('Lỗi khi thêm nhà sản xuất:', error);
        return res.status(500).json({ error: 'Lỗi server' });
    }
});
router.delete('/nhasanxuat/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const check = await db.query('SELECT * FROM nhasanxuat WHERE id_NhaSanXuat = ?', [id]);
        console.log("Kết quả tìm nhà sản xuất:", check);

        if (!Array.isArray(check) || check.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy nhà sản xuất' });
        }

        const result = await db.query('DELETE FROM nhasanxuat WHERE id_NhaSanXuat = ?', [id]);
        console.log("Kết quả DELETE:", result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Không thể xóa nhà sản xuất' });
        }

        return res.json({ message: 'Xóa nhà sản xuất thành công!' });
    } catch (error) {
        console.error('Lỗi khi xóa nhà sản xuất:', error);
        return res.status(500).json({ error: 'Lỗi server' });
    }
});
router.put('/nhasanxuat/:id', async (req, res) => {
    const { id } = req.params;
    const { TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website } = req.body;

    console.log("ID nhà sản xuất nhận được:", id);
    console.log("Dữ liệu cần cập nhật:", { TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website });

    try {
        const check = await db.query('SELECT * FROM nhasanxuat WHERE id_NhaSanXuat = ?', [id]);
        console.log("Kết quả tìm nhà sản xuất:", check);

        if (!Array.isArray(check) || check.length === 0) {
            return res.status(404).json({ error: 'Không tìm thấy nhà sản xuất' });
        }

        const result = await db.query(
            'UPDATE nhasanxuat SET TenNhaSanXuat = ?, DiaChi = ?, SoDienThoai = ?, Email = ?, Website = ? WHERE id_NhaSanXuat = ?',
            [TenNhaSanXuat, DiaChi, SoDienThoai, Email, Website, id]
        );
        console.log("Kết quả UPDATE:", result);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Không thể cập nhật nhà sản xuất' });
        }

        return res.json({ message: 'Cập nhật nhà sản xuất thành công!' });
    } catch (error) {
        console.error('Lỗi khi cập nhật nhà sản xuất:', error);
        return res.status(500).json({ error: 'Lỗi server' });
    }
});
export default router;
