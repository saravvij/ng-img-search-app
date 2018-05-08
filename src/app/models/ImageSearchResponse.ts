import { Item } from "./Item";

export class ImageSearchResponse{
    constructor(public title: String, public items: Item[]){
    }
}