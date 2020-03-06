import { handleActions } from 'redux-actions';

export const test = handleActions({
    'ADD'(state, action) {
      return state+ parseInt(action.payload.text)  //action.payload  == {type:'ADD',a :10,b:20}
    }
  }, 10000) 

  