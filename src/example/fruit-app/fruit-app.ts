import {IFruit,EFruitType} from "./i-fruit";
import {IDOMEvent} from "../commons/i-event";
import {FruitBasic} from "./fruit-basic";
import fruitStore from "./fruit-store";
import {addFruit,removeAllFruits} from "../actions/fruits";
import {IEventSubscribe} from "event-emitter-lite";

export class FruitApp extends FruitBasic{
	private refresh:Function;
	private desins:IEventSubscribe;
	constructor(){
		super();
	}
	private attached(){
		this.desins = fruitStore.onChange.subscribe(() => {
			console.log("mudou!!!!");
			console.log(this.fruits);
			this.refresh();
		})
	}
	private detached(){
		this.desins.cancel();
	}
	get fruits():IFruit[]{
		return fruitStore.get();
	}
	addFruit(fruitType:EFruitType):void{
	 	//store.dispatch(addFruit({desc:(fruitType==0?"banana":"grapes-bunch"),type:fruitType}));
	}
	private clear(){
		//store.dispatch( removeAllFruits() );
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