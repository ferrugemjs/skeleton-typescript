import {EventEmitter} from "event-emitter-lite";
import {ITodoItem} from "./i-todo-item";

export class TodoItem implements ITodoItem{
	public id:number;
	public desc:string;
	public done:boolean;
	public creation:Date;
	public onMarked:EventEmitter<{id:number,done:boolean}> = new EventEmitter();
	private MarkAsDone():void{
		console.log(this.onMarked);
		this.done = !this.done;
		this.onMarked.emit({id:this.id,done:this.done});
	}
	private detached(){
		console.log('hummmm hummmm')
		this.onMarked.unsubscribeAll();
	}
}