import productsModel from "./products.model";

export const productsResolvers = {
  Query: {
    products: async (parent, args, context, info) => {
      return productsModel.getAllProducts();
    }
  }
}