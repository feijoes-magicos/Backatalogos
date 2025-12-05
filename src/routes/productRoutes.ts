import {IRouter, Router} from 'express'
import ProductsController from 'controllers/products';

const router:IRouter = Router();

router.get('/', ProductsController.getProducts)

export default router;
