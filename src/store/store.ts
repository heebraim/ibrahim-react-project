// import { configureStore } from "@reduxjs/toolkit";

// import counterslice from "./slice"


// export const store=configureStore({
// reducer: {counter:counterslice}

// })

//  import { configureStore } from "@reduxjs/toolkit";
// import counterslice from "./slice"

// export const store= configureStore({
//    reducer:  { counter: counterslice }
// })

import { configureStore } from "@reduxjs/toolkit";
import counterslice from "./slice"
import todoSlice from "./slice";

export const store= configureStore({
   reducer:  { "counter": counterslice, "todo":todoSlice }
})