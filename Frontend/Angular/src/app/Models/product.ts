import { Category } from "./category";

export class Product{
    
   id_producto: number;
   name: string;
   category: Category;
   description: string;
   quantify: number;
   unit_price: number;

    constructor(
    public id_p: number,
    public name_p: string,
    public category_p: Category,
    public description_p: string,
    public quantify_p: number,
    public unit_price_p: number

    ) {}
}