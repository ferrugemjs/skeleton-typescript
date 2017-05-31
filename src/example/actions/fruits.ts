import {IFruit} from "../fruit-app/i-fruit";

export const ADD_FRUIT = "ADD_FRUIT";
export const REMOVE_FRUIT = "REMOVE_FRUIT";
export const REMOVE_ALL_FRUITS = "REMOVE_ALL_FRUITS";
export const UPDATE_FRUIT = "UPDATE_FRUIT";

export const addFruit = (fruit:IFruit) => {
	return {
		type:ADD_FRUIT
		,fruit
	}
}

export const removeFruit = (fruit:IFruit) =>{
	return {
		type:REMOVE_FRUIT
		,fruit
	}
}

export const removeAllFruits = () =>{
	return {
		type:REMOVE_ALL_FRUITS
	}
}

export const updateFruit = (fruit:IFruit) =>{
	return {
		type:UPDATE_FRUIT
		,fruit
	}
}