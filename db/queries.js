const pool = require('./pool');

async function getAllProducts() {
    const { rows } = await pool.query("SELECT * FROM products;");
    return rows;
}

async function getCategories() {
    const { rows } = await pool.query("SELECT DISTINCT category FROM details;");
    return rows;
}

async function getAllProductsOfSingleCategory(name) {
    const { rows } = await pool.query("SELECT * FROM products INNER JOIN details ON products.id = details.pid WHERE details.category = ($1);", [name]);
    return rows;
}

async function getProduct(id) {
    const { rows } = await pool.query("SELECT * FROM products INNER JOIN details ON products.id = details.pid WHERE products.id = ($1);", [id]);
    return rows;
}

async function deleteProduct(id) {
    const res = await pool.query("DELETE FROM products WHERE id = ($1);", [id]);
    return res;
}

module.exports = {
    getAllProducts,
    getCategories,
    getAllProductsOfSingleCategory,
    getProduct,
    deleteProduct,
}