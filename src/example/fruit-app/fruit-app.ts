import fruitStore from "./fruit-store";

import {IFruit,EFruitType} from "./i-fruit";

export class FruitApp{
	constructor(){
		fruitStore.onChange.subscribe(()=>{
			this.refresh();
		});
	}
	get fruits():IFruit[]{
		return fruitStore.get();
	}
	addFruit(fruitType:EFruitType):void{
	 	fruitStore.add({desc:'',type:fruitType});
	}
	allowDrop(evt:Event):void{
		evt.preventDefault();
	}
	drag(fruitType:EFruitType,evt:Event):void{
		evt.dataTransfer.setData("type",fruitType);
	}
	drop(evt:Event):void{
		evt.preventDefault();
		let data:EFruitType = evt.dataTransfer.getData("type");
		this.addFruit(data);
	}

}