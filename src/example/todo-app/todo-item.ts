import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./i-todo-item";

export class TodoItem implements ITodoItem{
	public idItem:number;
	public desc:string;
	public done:boolean;
	public creation:Date;
	public onMarked:EventEmitter<{idItem:number,done:boolean}> = new EventEmitter();
	private MarkAsDone():void{
		this.done = !this.done;
		this.onMarked.emit({idItem:this.idItem,done:this.done});
	}
}