import { IRouter, Router } from "express";

import productRoutes from './productRoutes'

const router:IRouter = Router()

router.use('/products', productRoutes)

export default router;


