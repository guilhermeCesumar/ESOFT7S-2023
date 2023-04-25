import { ProductType } from "./types/products.type";
import ProductModel from "./product.schema";
import { writeFile, readFile } from "fs/promises";

export class ProductService {
  async create(product: ProductType) {
    const createdProduct = await ProductModel.create(product);
    return createdProduct;
  }

  async list() {
    const listProducts = await ProductModel.find();
    return listProducts;
  }

  async find(id) {
    const findProduct = await ProductModel.findById(id);
    return findProduct;
  }

  async update(id, data: ProductType) {
    const updatedProduct = await ProductModel.findOneAndUpdate(
      { _id: id },
      { name: data.name, quantity: data.quantity, price: data.price },
      { new: true }
    );

    return updatedProduct;
  }

  async delete(id) {
    await ProductModel.findByIdAndDelete(id);
    return "successfully deleted product!";
  }

  async findAndWriteProducts() {
    const listProducts = await ProductModel.find();
    await writeFile("listProducts.json", JSON.stringify(listProducts, null, 2));
  }

  async readProducts() {
    const listProducts = await readFile("listProducts.json", "utf-8");
    return JSON.parse(listProducts);
  }
}
