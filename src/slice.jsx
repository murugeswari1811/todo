import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
uuidv4();


export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value:{id:uuidv4(),task:"",completed:false,isEditing:false},
    todos:[]

  },
  reducers: {
   
    setTodos: (state, action) => {
        state.todos=action.payload 
      },
      setValue: (state, action) => {
        state.value = action.payload
      },
  },
})

export const { setTodos,setValue } = todoSlice.actions

export default todoSlice.reducer