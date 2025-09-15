const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

// خدمة ملفات الفرونت اند
app.use(express.static(path.join(__dirname, '../frontend')));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/api/auth', require('./routes/auth'));

// مسارات API
app.use('/api', require('./routes/recipe'));



// JWT middleware (uses shared JWT_SECRET)
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('./routes/shared');
function authMiddleware(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Bearer ')) return res.status(401).json({ error: 'مطلوب تسجيل الدخول' });
    try {
        const decoded = jwt.verify(auth.split(' ')[1], JWT_SECRET);
        req.user = decoded;
        next();
    } catch (e) {
        return res.status(401).json({ error: 'رمز غير صالح' });
    }
}

// مثال لمسار إدارة محمي
app.get('/api/admin/secret', authMiddleware, (req, res) => {
    if (!req.user.isAdmin) return res.status(403).json({ error: 'غير مصرح' });
    res.json({ message: 'مرحباً أيها المدير!' });
});

//
app.use((req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log('==============================');
    console.log(`✅  Server is running!`);
    console.log(`🌐  Open your browser at: http://localhost:${PORT}`);
    console.log('==============================');
});

