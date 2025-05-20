// import { createSlice } from "@reduxjs/toolkit";

// const counterslice = createSlice({
//     name:"counter",
//     initialState:{value:0},
//     reducers:{
//         increment:(state:any)=>{
//             state.value=state.value+1
//             // state=state+1

//         }
//     }
// })

// export const {increment}= counterslice.actions;
// export default counterslice.reducer

// import { createSlice } from "@reduxjs/toolkit";

// const counterslice= createSlice({
//     name:"counter",
//     initialState: [],
//     reducers:{
//         increment: (state:any,action)=>{
//         state.value= state.value+1
//         state= [...state,action.payload]
//         state= state.splice(1,action.payload)
//         // state.value+=1
//         },
//         decrement: (state:any)=>{
//             state.value= state.value-1
//         },
//         increaseByAmount: (state:any,action)=>{
//             state.value= state.value+ action.payload
//         }
//     }
// })

// export const { increment,decrement, increaseByAmount} =counterslice.actions;
// export default counterslice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const counterslice= createSlice({
//     name:"counter",
//     initialState: [],
//     reducers:{
//         setIncrement: (state:any,action)=>{
//         // state.value= state.value+1
      
//          state.push (  action.payload ) // state= state.splice(1,action.payload)
//         // state.value+=1
//         },
       
//     }
// })

// export const { setIncrement} =counterslice.actions;
// export default counterslice.reducer;

import { createSlice } from "@reduxjs/toolkit";



const todoSlice= createSlice({
    name:'todo',
    initialState:[],
    reducers:{
        addTodo: (state:any,action:any)=>{
            state.push(action.payload)
        },
        delTodo:(state,action)=>{
        //     console.log(action.payload)
        //    console.log()
        return state.filter((todo:any,i)=>todo.id!==action.payload)
// return state.splice(-1,action.payload)

        },
        editTodo:(state:any,action)=>{
          const {title,id}=action.payload
         const filterDetails= state.findIndex((item:any,i:any)=>item.id==id)
      state[filterDetails].title=title
        },
        setCompleted:(state, action)=>{
            const index = state.findIndex(item=> item.id === action.payload);
            if (index !== -1){
                state[index].completed = ! state[index].completed;
            }

        }
    }

})

export const {addTodo, delTodo, editTodo,setCompleted } = todoSlice.actions
export default todoSlice.reducer