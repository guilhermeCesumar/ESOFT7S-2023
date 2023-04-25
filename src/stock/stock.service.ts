import productStock from "./stock.schema";
import productSchema from "../products/product.schema";

class StockService {
  async getStockValue() {
    const product = await productSchema.find();
    const valorEstoque = product.map((item) => {
      return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        stockValue: (item.quantity * item.price).toFixed(2),
      };
    });
    console.log(valorEstoque);
    productStock.insertMany(valorEstoque);
  }

  async chooseRandomProducts() {
    const products = await productSchema.find();
    let randomProducts: any = [];

    while (randomProducts.length < 4) {
      let randomNumber = Math.floor(Math.random() * products.length);
      let checkObjectValue = false;

      for (let i = 0; i < randomProducts.length; i++) {
        if (randomProducts[i] === products[randomNumber]) {
          checkObjectValue = true;
        }
      }
      if (!checkObjectValue) {
        randomProducts.push(products[randomNumber]);
      }
    }
    return randomProducts;
  }

  async getStockTotalValue() {
    const products = await productStock.find();
    const totalStockValue = products.reduce((totalValue, currentValue) => {
      return totalValue + currentValue.stockValue;
    }, 0);
    return totalStockValue;
  }
}

export default StockService;
