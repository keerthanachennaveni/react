// import { useEffect } from "react";
// import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { MENU_API } from "../Utils/contants";

//const RestaurantMenu=()=>{

//     const [resInfo,setResInfo]=useState(null);

//     const {resId}=useParams();
//    // console.log(resId);
    
//     useEffect(()=>{
//         fetchMenu();
//     },[])

//     const fetchMenu=async()=>{
//         const data=await fetch(
//             MENU_API+resId
//         );
//         const json=await data.json();

//         console.log(json);
//         setResInfo(json);
//     };

     const RestaurantMenu=()=>{
        const{resId}=useParams();

        const resInfo=useRestaurantMenu(resId);
        console.log(resInfo);
     

    if(resInfo===null) return <Shimmer />;

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards}=resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

    console.log(resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards);

    const categories=resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return ( 
        <div className="menu text-center ">
            <h1 className="font-bold my-4 text-2xl">{name}</h1>
            <p>
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {categories.map((category)=>(
                <RestaurantCategory data={category?.card?.card}/>
            ))}
        </div>
    );
};

export default RestaurantMenu;