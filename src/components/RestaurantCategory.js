import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory = ({ data }) => {
    const [showItems,setshowItems]=useState(false)
    const handleClick=()=>{
        setshowItems(!showItems);
    }

    
    return (
        <div>

            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer" onClick={handleClick}>
                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>

                    <span>🔽</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}


            </div>
        </div>
    )
}

export default RestaurantCategory;