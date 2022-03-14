const productsModel = require("./products.model");

module.exports = {
  Query: {
    products: (parent, args, context, info) => {
      return productsModel.getAllProducts();
    },
    productsByPrice: (_, { min, max }) => {
      return productsModel.getProductsByPrice(min, max);
    },
    productById: (_, { id }) => {
      return productsModel.getProductById(id);
    }
  },
  Mutation: {
    addNewProduct: (_, { id, description, price }) => {
      return productsModel.addNewProduct(id, description, price)
    },
    addNewProductReview: (_, {id, rating, comment}) => {
      return productsModel.addNewProductReview(id, rating, comment)
    }
  }
}