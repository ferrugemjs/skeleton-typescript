import {ITodoItem} from "./i-todo-item";
export class TodoList{
	private itens:ITodoItem[];
	constructor(){
		this.itens = [
			{id:1,desc:'teste',creation:new Date()}
		];
	}
	private add(evt:Event):void{
		let {value} = evt.target;
		if(value){
			this.itens.push({
				id:this.itens.length+1
				,desc:value
				,creation:new Date()
			});
			this.refresh();
		}		
	}
}