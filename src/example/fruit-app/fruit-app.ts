import {IFruit} from "./i-fruit";

export class FruitApp{
	private fruits:IFruit[];
	constructor(){
		this.fruits = [
		{id:1,desc:"banana"}
		,{id:2,desc:"apple"}
		];
	}
}