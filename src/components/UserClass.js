import React from "react";

// class UserClass extends React.Component{
//     constructor(props){
//         super(props);
//     }
    //render(){
        // return(
        //     <div className="user-card">
        //         <h2>Name:{this.props.name}</h2>
        //         <h3>Location:{this.props.location}</h3>

        //     </div>
        // )
        //}     
           //OR//
     
    // render(){
    //     const {name,location}=this.props;
    //     return(
    //         <div className="user-card">
    //             <h2>Name:{name}</h2>
    //             <h3>Location:{location}</h3>

    //         </div>
    //     )

    // }


        //using useState HOOK//

class UserClass extends React.Component{
constructor(props){
    super(props);
    
   this.state={
    count:0,
    count1:2,
   };
}
   render(){
    const {name,location}=this.props;
    const {count,count1}=this.state;
        return(
            <div className="user-card">
                <h2>count:{count}</h2>
                <h2>count1:{count1}</h2>
                <button onClick={()=>{
                    this.setState({
                        // count:this.state.count+1,
                        count1:this.state.count1+1,
                    })
                }}></button>
                <h2>Name:{name}</h2>  {/*name and location are passed from About.js but count state is declared in this only*/}
                <h3>Location:{location}</h3>

            </div>
        )

   }
}
export default UserClass;