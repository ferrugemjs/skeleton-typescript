import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./i-todo-item";

export class TodoItem implements ITodoItem{
	public id:number;
	public desc:string;
	public done:boolean;
	public creation:Date;
	public onDone:EventEmitter<boolean> = new EventEmitter();
	private MarkAsDone():void{
		this.done = !this.done;
		this.refresh();
	}
}