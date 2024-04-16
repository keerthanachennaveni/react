// const Userfunc=(props)=>{
//     return(
//         <div className="user-card">
//            <h2>
//             Name:{props.name}
//            </h2>
//         </div>
//     );
// };

        //OR//

// const Userfunc=({name,location})=>{
//     return(
//         <div className="user-card">
//            <h2>Name:{name}</h2>
//            <h3>Location:{location}</h3>
//         </div>
//     );
// };


       //using useState HOOK//


import { useState } from "react";
const Userfunc=({name,location})=>{
    const [count]=useState(0);
    const [count2]=useState(1);
    return(
        
        <div className="user-card">
            <h1>count={count}</h1>
            <h1>count2={count2}</h1>
           <h2>Name:{name}</h2>
           <h3>Location:{location}</h3>
        </div>
    );
};


export default Userfunc;