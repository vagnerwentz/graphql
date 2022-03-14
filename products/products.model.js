const products = [
  {
    id: 'redshoe',
    description: 'Red Shoe',
    price: 42.12,
    reviews: [],
  },
  {
    id: 'bluejean',
    description: 'Blue Jean',
    price: 500.39,
    reviews: [],
  }
]

function getAllProducts() {
  return products;
}

function getProductsByPrice(min, max) {
  return products.filter((product) => product.price >= min && product.price <= max)
}

function getProductById(id) {
  return products.find((product) => product.id === id)
}

function addNewProduct(id, description, price) {
  const newProduct = {
    id, 
    price, 
    description, 
    reviews: [],
  }
  products.push(newProduct);
  return newProduct;
}

function addNewProductReview(id, rating, comment) {
  const product = getProductById(id);
  if (product) {
    const newReview = {
      rating,
      comment
    }
    
    product.reviews.push(newReview)
    return product;
  }  
}

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview
}