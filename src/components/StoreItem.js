import ControlButton from "./ControlButton";

const StoreItem = ({item, addtocart, increase, decrease}) => {
    return ( 
        <div>
            <div className="card" style={{width: '70vw', marginLeft:'-20%', marginBottom:'20px', boxShadow: '1px 1px 2px rgba(0,0,0,0.2'}}>
                <div className="card-body">
                    <h5 className="card-title">{ item.itemName }</h5>
                    <p className="card-text">{ item.itemDesc }</p>
                    <a className="card-text">${ item.price }</a>
                    <p className="card-text">{item.rating}</p>
                    
                    <ControlButton addtocart={addtocart} item = {item} onIncrease={increase} onDecrease={decrease} />
                </div>
            </div>
        </div>
     );
}

// StoreItem.defaultProps = {
//     itemName: 'Default Item',
//     itemDesc: 'Brief description about the item',
//     price: '$0.00',
//     rating: ''
// }
 
export default StoreItem;