import {EventEmitter} from "event-emitter-lite";
import {IFruit} from "./i-fruit";

export class FruitStore{
	public onChange:EventEmitter<any> = new EventEmitter();
	private fruits:IFruit[];
	private nextId:number;
	constructor(){
		this.nextId = 1;
		this.fruits = [];
	}
	public get():IFruit[]{
		return this.fruits;
	}
	public add(fruit:IFruit):void{
		fruit.id = this.nextId++;
		this.fruits.push(fruit);
		this.onChange.emit(null);
	}
	public clear():void{
		this.fruits = [];
		this.onChange.emit(null);
	}
}

export default new FruitStore();