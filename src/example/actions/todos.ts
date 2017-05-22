import {ITodoItem} from "../todo-app/i-todo-item";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (todo:ITodoItem)=>{
	return {
		type:ADD_TODO
		,todo
	}
}

export const removeTodo = (todo:ITodoItem) => {
	return {
		type:REMOVE_TODO
		,todo
	}
}

export const updateTodo = (todo:ITodoItem) => {
	return {
		type:UPDATE_TODO
		,todo
	}
}