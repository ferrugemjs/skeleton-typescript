import {ADD_FRUIT,REMOVE_ALL_FRUITS,REMOVE_FRUIT,UPDATE_FRUIT} from "../actions/fruits";
import {IFruit} from "../fruit-app/i-fruit";

export default (state:IFruit[] = [], action: {type:string,fruit:IFruit} ) => {
	switch (action.type) {
    case ADD_FRUIT:
    	action.fruit.id = state.length+1;	
      return [
        ...state,action.fruit
      ]
	case REMOVE_FRUIT:
      return state.filter(tmpfruit => tmpfruit.id !== action.fruit.id)
	case REMOVE_ALL_FRUITS:
      return []      
    case UPDATE_FRUIT:
		return state.map(tmpfruit => {
	        if (tmpfruit.id === action.fruit.id) {
	          return Object.assign({}, tmpfruit, action.fruit)
	        }
	        return tmpfruit
      	}) 
    default:
      return state
  	}
}