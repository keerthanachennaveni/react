import {CDN_URL} from "../Utils/contants";
const ItemList=({items})=>{
    console.log(items)
    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id}
                     className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                    <div className="w-9/12">
                    <div className="py-2 font-sans	">
                        <span>{item.card.info.name}</span>
                        <span>{" "}- ₹{" "}{item.card.info.price/100}</span>
                    </div>
                    <p className="text-xs font-sans	">{item.card.info.description}</p>
                </div>
                
                <div className="w-3/12">
                <div className="absolute"> 
                    <button className="bg-black text-white rounded-lg">Add + </button>
                </div>
                    <img src={CDN_URL+item.card.info.imageId} />
                </div>
                </div>
            ))}
        </div>
    )
}
export default ItemList;