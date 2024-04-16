import { CDN_URL } from "../Utils/contants";
const RestaurantCard=(props)=>{
    const {resdata}=props;
    return(
        <div className="m-4 p-4 w-[230px] h-[400px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img 
            className="w-[230px] h-[150px] rounded-lg"
            alt="res-logo"
            
            src={CDN_URL+resdata.info.cloudinaryImageId}></img>
           <h3 className="font-bold py-4 text-lg">{resdata.info.name}</h3>
           <h4>{resdata.info.cuisines.join(", ")}</h4>
           {/* <h4>{resdata.info.cuisines}</h4> */}
           <h4>{resdata.info.avgRating} stars</h4>
           <h4>{resdata.info.costForTwo}</h4>
           <h4>{resdata.info.sla.deliveryTime} minuts</h4>
        </div>
    );
};
export default RestaurantCard 