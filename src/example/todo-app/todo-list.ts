import {ITodoItem} from "./i-todo-item";
export class TodoList{
	private itens:ITodoItem[];
	constructor(){
		this.itens = [
			{idItem:1,desc:'teste',creation:new Date()}
		];
	}
	private add(evt:Event):void{
		let {value} = evt.target;
		if(value){
			this.itens.push({
				idItem:this.itens.length+1
				,desc:value
				,creation:new Date()
			});
			this.refresh();
		}		
	}
	private mark(pitem:ITodoItem):void{
		let founded:boolean = this.itens.some(item=>{
			if(item.idItem==pitem.idItem){
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