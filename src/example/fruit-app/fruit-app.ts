import {IFruit,EFruitType} from "./i-fruit";
import {IDOMEvent} from "../commons/i-event";
import {FruitBasic} from "./fruit-basic";
import store from "../store/store";
import {} from "redux";
import {addFruit,removeAllFruits} from "../actions/fruits";

export class FruitApp extends FruitBasic{
	private refresh:Function;
	private desins:Function;
	constructor(){
		super();
	}
	private attached(){
		this.desins = store.subscribe(() => {
			console.log("mudou!!!!");
			console.log(this.fruits);
			this.refresh();
		})
	}
	private detached(){
		this.desins();
	}
	get fruits():IFruit[]{
		return store.getState()["fruits"];
	}
	addFruit(fruitType:EFruitType):void{
	 	store.dispatch(addFruit({desc:(fruitType==0?"banana":"grapes-bunch"),type:fruitType}));
	}
	private clear(){
		store.dispatch( removeAllFruits() );
	}
	private allowDrop(evt:Event):void{
		evt.preventDefault();
	}
	private drag(fruitType:EFruitType,evt:IDOMEvent):void{
		evt.dataTransfer.setData("type",fruitType);
	}
	private drop(evt:IDOMEvent):void{
		evt.preventDefault();
		let data:EFruitType = evt.dataTransfer.getData("type");
		this.addFruit(data);
	}

}