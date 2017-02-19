import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./i-todo-item";

export class TodoItem implements ITodoItem{
	public id:number;
	public desc:string;
	public done:boolean;
	public creation:Date;
	public onMarked:EventEmitter<{id:number,done:boolean}> = new EventEmitter();
	private refresh:Function;
	constructor(){
	}
	private MarkAsDone():void{
		this.done = !this.done;
		this.onMarked.emit({id:this.id,done:this.done});
	}
	private detached(){		
		this.onMarked.unsubscribeAll();
	}
}