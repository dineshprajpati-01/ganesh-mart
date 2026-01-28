import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    title:'cdmi',
    cart:[]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    changeName:(state)=>{
        state.title = "dinesh"
    },
    addTocart:(state,action) =>{
      state.cart.push(action.payload)   
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount ,changeName , addTocart} = counterSlice.actions

export default counterSlice.reducer