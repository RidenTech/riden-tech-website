import Admin from '../models/adminModel.js';
import jwt from 'jsonwebtoken';

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ where: { username } });

        if (admin && (await admin.matchPassword(password))) {
            const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRE || '7d',
            });

            res.json({
                id: admin.id,
                username: admin.username,
                token: token,
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


