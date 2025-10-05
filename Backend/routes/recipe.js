
const express = require('express');
const router = express.Router();

// Main route
router.get('/', (req, res) => {
    res.send('Recipe API Endpoint');
});

// Today's menu route
router.get('/menu/today', (req, res) => {
    res.json({
        menu: [
            {
                id: 1,
                name_fi: 'Riisiruoka (Kabsa)',
                name_en: 'Kabsa',
                available: true,
                vegan: false,
                gluten_free: true,
                lactose_free: true,
                image_url: '/assets/img/food-bg.jpg',
                description: 'Perinteinen saudiarabialainen riisiruoka.',
                allergens: ['nuts', 'milk']
            },
            {
                id: 2,
                name_fi: 'Salaatti',
                name_en: 'Salad',
                available: true,
                vegan: true,
                gluten_free: true,
                lactose_free: true,
                image_url: '/assets/img/salati.jpg',
                description: 'Tuore vihannessalaatti.',
                allergens: []
            }
        ]
    });
});

module.exports = router;
