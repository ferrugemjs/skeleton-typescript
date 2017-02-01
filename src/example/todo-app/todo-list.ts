import {ITodoItem} from "./i-todo-item";
import {IDOMEvent} from "../commons/i-event";
export class TodoList{
	private refresh:Function;
	private itens:ITodoItem[];
	private nextId:number;
	constructor(){
		this.nextId=0;
		this.itens = [
			{id:this.nextId++,desc:'teste',creation:new Date()}
		];		
	}
	private add(evt:IDOMEvent):void{
		if(evt.which == 13 || evt.keyCode == 13){
			let value = evt.target.value;
			if(value){
				this.itens.unshift({
					id:this.nextId++
					,desc:value
					,creation:new Date()
				});
				console.log(this);
				this.refresh();
			}	
		}		
	}
	private mark(pitem:ITodoItem):void{
		let founded:boolean = this.itens.some(item=>{
			if(item.id==pitem.id){
				item.done=pitem.done;
				return true;
			}
			return false;
		});
		if(founded){
			this.refresh();
		};		
	}
	private markAll(done:boolean):void{
		this.itens.forEach(item=>item.done=done);
		this.refresh();
	}
	private archiveAllDone():void{
		this.itens = this.itens.filter(item=> !item.done );
		this.refresh();
	}
}