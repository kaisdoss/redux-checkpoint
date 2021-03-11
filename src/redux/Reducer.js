import { ADD_TODO, DELETE_TODO, UPDATE_TODO, COMPLET_TEXT, SAVE_TASK } from "./Actions";
import { todos } from "./States";

export let reducer = (state = todos, action) => {
  let newTodos;
  switch (action.type) {
    case ADD_TODO:
      // newTodos = [...state];
      // newTodos.push(action.payload);

      return [...state,action.payload];

    case DELETE_TODO:
      newTodos = [...state];
      newTodos = newTodos.filter((todo) => todo.id !== action.payload);
      return newTodos;

    case UPDATE_TODO:
      // Make copy of our state in new Variable called newTodos, you should not mutate the state (means directly work on state)
      newTodos = [...state];
      let index = -1;
      //   Here we're just finding the index of the element to update
      for (let i = 0; i < newTodos.length; i++) {
        index++;
        if (newTodos[i].id === action.payload.id) {
          break;
        }
      }
      //   Here we do the update shit
      if (index !== -1) {
        newTodos[index] = action.payload;
        // console.log(newTodos);
        return newTodos;
      }
     
      case COMPLET_TEXT:
        newTodos = [...state]
        return newTodos.map( task => task.id === action.payload ? { ...task, isChecked : !task.isChecked} : task )

        case SAVE_TASK:
          newTodos = [...state]
      return 
        newTodos.map((el) =>el.id === action.payload ? { ...el, text: action.payload.id } : el)
          
        
         

    default:
      return state;
  }
};
