import express from 'express';
import data from './data.js';

const app = express();

// SERVER CONFIG
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// API ================================

// CATEGORIES
app.get('/api/categories/top-categories', (req, res) => {
    res.send(data.topCategories);
});

// STORES
app.get('/api/stores/index-featured-estores', (req, res) => {
    res.send(data.featuredStores);
});

// COUPONS
app.get('/api/coupons/general-featured-coupons', (req, res) => {
    res.send(data.generalFeaturedCoupons);
});

// INDEX
app.get('/', (req, res) => {
    res.send('Server is ready');
});

