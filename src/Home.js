import React,{ useState } from 'react';

function Home() {

    const [state,setstate] = useState("hello");
   
   const changed = (e) => {
     setstate(e.target.value);
   }
   
     return (
       <div>
         <h1>Info is -: {state}</h1>
         <input type="text" value={state} onChange={changed}></input>
       </div>
     );
   }
   
   export default Home;