export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const CHECK_TODO = "CHECK_TODO";
export const COMPLET_TEXT = "COMPLET_TEXT";
export const SAVE_TASK = "SAVE_TASK";

export function addtodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo, 
  };
}



export function deletetodo(todoId) {
  return {
    type: DELETE_TODO,
    payload: todoId,
  };
}
export function updatetodo(todo) {
  // console.log('123456',todo);
  return {
    type: UPDATE_TODO,
    payload: todo,
  };
}


export const completText = (id)  =>{
  return {
  type: COMPLET_TEXT,
  payload:id
 };
}

export const saveTask = (id) => {
  return {
    type: SAVE_TASK,
    payload:id
  };
}