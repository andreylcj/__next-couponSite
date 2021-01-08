import express from 'express';
import data from './data.js';
import categoryData from './category.js'

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
app.get('/api/categorias/top-categorias', (req, res) => {
    res.send(data.topCategories);
});
app.get('/api/categorias/:categoria', (req, res) => {
    const categoria = categoryData.category.find((x) => x.hiffen_title === req.params.categoria)
    if (categoria) {
        res.send(categoria);
    } else {
        res.status(404).send({ message: 'Categoria nao encontrada' })
    }
});
app.get('/api/categorias/:categoria/lojas-relacionadas', (req, res) => {
    res.send(categoryData.category[0].related_stores);
});
app.get('/api/categorias/:categoria/cupons-validos', (req, res) => {
    res.send(categoryData.category[0].valid_coupons);
});
app.get('/api/categorias/:categoria/cupons-expirados', (req, res) => {
    res.send(categoryData.category[0].expired_coupons);
});

// STORES
app.get('/api/lojas/index-featured-estores', (req, res) => {
    res.send(data.featuredStores);
});

// COUPONS
app.get('/api/cupons/general-featured-coupons', (req, res) => {
    res.send(data.generalFeaturedCoupons);
});

// INDEX
app.get('/', (req, res) => {
    res.send('Server is ready');
});

