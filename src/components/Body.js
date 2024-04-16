import RestaurantCard from "./RestaurantCard";
import resobj from "../Utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

//EPISODE 05
// const Body=()=>{
//     const [listOfRestaurants, setListOfRestaurants]=useState(resobj);
//     return (
//        <div className="body">
//         <div className="filter">
//             <button className="filter-btn" 
//             onClick={()=>{
//                 const filteredList=listOfRestaurants.filter(
//                     (res)=>res.info.avgRating>4.3);
//                     //  console.log(filteredList);
//                     setListOfRestaurants(filteredList);
//                     // console.log(ListOfRestaurants);
//             }}
//             >
//                 Top Rated</button>
//         </div>
//         <div className="res-container">
//             {
//             listOfRestaurants.map(i=>(
//                  <RestaurantCard key={i.info.id} resdata={i}/>
//             ))
//         }
//         </div>
//        </div>
//     );

// };
// export default Body

//EPISODE 05 END



//EPISODE 06 
//fetch return promise 
//to resolve promises we use async
const Body = () => {
    const [ListOfRestaurants, setListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setfilteredRestaurant] = useState([]);
    // whenever state variables update react trigges a reconcillation cycle(re-render the component)
    // React fast ->it has virtual DOM,it compare two virtual DOMs whenever a update accure the updated value only will change
    console.log(ListOfRestaurants);
    console.log(filteredRestaurant);
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

        );

        const json = await data.json();
        // setListOfRestaurants(json);
        //console.log(json);
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    };


    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <h1>Looks you are in offline!!! pleace check your internet connection</h1>

    return (ListOfRestaurants.length === 0) ? (<Shimmer />) : (
        <div className="body">
            <div className="flex items-center">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    ></input>
                    <button className="m-4 px-4 py-1 bg-green-200 rounded-lg" onClick={() => {
                        //    {/* filter the restaurant cards and update the UI */}
                        const filteredRestaurant = ListOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                        setfilteredRestaurant(filteredRestaurant);

                    }}
                    >search</button>
                    <button className="ml-1 px-4 py-1 bg-green-200 rounded-lg"
                        onClick={() => {
                            const filteredList = ListOfRestaurants.filter(
                                (res) => res.data.avgRating > 4.3);
                            //  console.log(filteredList);
                            setListOfRestaurants(filteredList);
                            // console.log(ListOfRestaurants);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resdata={restaurant} /></Link>
                ))}
            </div>
        </div>
    );
};
export default Body;