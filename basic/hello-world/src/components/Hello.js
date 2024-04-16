import React from "react";
const Hello=()=>{



    // return(
    //     <div>
    //         <h1>Hello World JSX</h1>
    //     </div>
    // )

    
    // ABOVE CODE USING JSX
    return React.createElement('div',{id:'hello',className:'dummy class'},React.createElement('h1',null,'Hello world jsx'))





}
export default Hello