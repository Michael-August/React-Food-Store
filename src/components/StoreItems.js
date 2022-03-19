import StoreItem from "./StoreItem";

const StoreItems = ({ items, addtocart, increase, decrease }) => {
    
    return ( 
        <div>
            {items.map((item) => <StoreItem key={item.id} item={item} addtocart={addtocart} increase={increase} decrease={decrease} />)}
        </div>
     );
}
 
export default StoreItems;