export class MenuSection{
	private index:number;
	private refresh:Function;
	constructor(){
		this.index = -1;
	}
	private selectIndex(index:number){
		this.refresh({index:index});
	}
}