import { products_gender, products_type } from "@prisma/client";
import { Request, Response } from "express";
import ProductsServices from "services/products/";
import parseEnum from "utils/parseEnum";

interface ProductsQuery<T=string, delivery=string, gender=string, branch=string> {
	page?: T;
	limit?: T;

	brand_id?: T;
	category_id?: T;
	subcategory_id?: T;
	type?: branch;
	gender?: gender;
	prompt_delivery?: delivery;
}

type ProductsRequest = Request<{}, {}, {}, ProductsQuery>;

class IProductsController {
	async getProducts(req: ProductsRequest, res: Response) {
		const {
			page,
			limit,
			gender,
			subcategory_id,
			prompt_delivery,
			type,
			brand_id,
			category_id,
		} = req.query;

		const pagination = {
			page: page ? Number(page) : 1,
			limit: limit ? Number(limit) : 20,
		};

		const filters: Partial<ProductsQuery<number, boolean, products_gender, products_type>> = Object.fromEntries(
			Object.entries({
				gender,
				subcategory_id,
				prompt_delivery,
				brand_id,
				type,
				category_id,
			}).filter(([_, v]) => typeof v === "string").map(([k, v])=>{
					if(k === 'prompt_delivery'){
						return [k, v==="true"]
					}
					if(k === 'gender'){
						return [k, parseEnum(products_gender, v)]
					}
					if(k === 'type'){
						return [k, parseEnum(products_type, v)]
					}
					return [k, Number(v)]
				})
		);

		const products = await ProductsServices.getAllProducts(pagination, filters);

		res.status(200).send(products);
	}
}

export default IProductsController;
