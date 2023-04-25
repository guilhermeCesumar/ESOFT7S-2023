import { Response, Request } from "express";
import StockService from "./stock.service";

class StockController {
  async create(req: Request, res: Response) {
    const product = await new StockService().getStockValue();
    return res.status(200).json(product);
  }

  async chooseRandomProducts(req: Request, res: Response) {
    const products = await new StockService().chooseRandomProducts();
    return res.status(200).json(products);
  }

  async stockTotalValue(req: Request, res: Response) {
    const products = await new StockService().getStockTotalValue();
    return res.status(200).json(products);
  }
}

export default new StockController();
