import express from 'express';
import db from '../db.mjs.js';


const router = express.Router();

router.get('/phieuxuat', (req, res) => {
    const sql = 'SELECT * FROM phieuxuat';

    db.query(sql, (err, results) => {
        if (err) {
            console.error('Lỗi khi truy vấn database:', err);
            return res.status(500).json({ error: 'Lỗi server' });
        }
        res.json(results);
    });
});

export default router;