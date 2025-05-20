// import React from 'react'
// import { useState } from 'react'

// function Test() {

//   const[daily,setDaily]=useState('this is daily')
//   const[weekly,setWeekly]=useState( 'this is weekly')
//   const[monthly,setMonthly]=useState('this is monthly')
//   const[active,setActive]=useState('')

//   function handleDaily() {
//     setActive(daily)
  
//   }
//   function handleWeekly() {
//     setActive(weekly)
  
//   }
//   function handleMonthly() {
//     setActive(monthly)
  
//   }

//   return (
//     <div className='flex-col justify-center '>
      
//     <div className='flex justify-center gap-10'>

//       <button onClick={handleDaily} className={`border-2 border-yellow-500 text-lg rounded-md ${active==daily?"bg-red-500":" bg-green-600"}`}>DAILY</button>
//     <button onClick={handleWeekly} className='text-lg bg-green-600 border-2 border-yellow-500 rounded-'  >WEEKLY</button>
//     <button onClick={handleMonthly} className={`border-2 border-yellow-500 text-lg rounded-md ${active==monthly?"bg-red-500":"  bg-green-600"}`}  >MONTHLY</button>
//     </div>
    
    
    
    
    
//     {active==daily?<div>{daily}</div>:""}
    
    
//     {active==weekly?<div>{weekly}</div>:""}
    
    
//     {active==monthly?<div>{monthly}</div>:""}
    


//     </div>
//   )
// }

// export default Test
