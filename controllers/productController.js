const db = require('../db/queries');

async function getAll(req, res) {
    const products = await db.getAllProducts();
    res.render('allProducts', {title: 'Products', allProducts : products});
}

async function getSingle(req, res) {
    const { id } = req.params;
    const [ product ] = await db.getProduct(id);
    res.render('product', {title: product.item, product : product});
}

module.exports = {
    getAll,
    getSingle,
}