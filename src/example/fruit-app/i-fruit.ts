export enum EFruitType{
	BANANA
	,GRAPES
}

export interface IFruit{
	id?:number;
	desc:string;
	type:EFruitType;
}