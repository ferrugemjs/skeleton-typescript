import fruitStore from "./fruit-store";
import {IFruit,EFruitType} from "./i-fruit";
import {IDOMEvent} from "../commons/i-event";

export class FruitApp{
	private refresh:Function;
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
	drag(fruitType:EFruitType,evt:IDOMEvent):void{
		evt.dataTransfer.setData("type",fruitType);
	}
	drop(evt:IDOMEvent):void{
		evt.preventDefault();
		let data:EFruitType = evt.dataTransfer.getData("type");
		this.addFruit(data);
	}

}