import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./i-todo-item";

export class TodoItem implements ITodoItem{
	public id:number;
	public desc:string;
	public done:boolean;
	public creation:Date;
	public onMarked:{once:Function};
	public _onMarked:EventEmitter<{id:number,done:boolean}> = new EventEmitter();
	
	constructor(){
		this.onMarked = {once:(fn:Function)=>{
			if(!this._onMarked.hasSubscribers()){
				this._onMarked.once(<any>fn);
			}
		}}
	}

	private MarkAsDone():void{
		console.log(this._onMarked);
		this.done = !this.done;
		this._onMarked.emit({id:this.id,done:this.done});
	}
	private detached(){
		console.log('hummmm hummmm')
		this._onMarked.unsubscribeAll();
	}
}