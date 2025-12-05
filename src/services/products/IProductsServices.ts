import prisma from "database";
import { products_type, products_gender } from "@prisma/client";

interface Pagination {page:number, limit:number}
interface Filters{
	brand_id?: number;
	category_id?: number;
	subcategory_id?: number;
	gender?: products_gender;
	prompt_delivery?: boolean;
	type?: products_type
}
class IProductsServices {
	async getAllProducts(pagination:Pagination, filters:Filters){
		try{
			const {page, limit} = pagination
			const pagination_offset = (page - 1)*limit
			const maybeProducts = await prisma.products.findMany({
				where:{
					...filters
				},
				take:limit,
				skip: pagination_offset
			})
			return maybeProducts;
		}catch(e){
			console.error(e)
			return [];
		}
	}
}

export default IProductsServices;
