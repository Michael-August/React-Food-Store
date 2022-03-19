const ControlButton = ({item, cartitem, addtocart, onIncrease, onDecrease}) => {
    return ( 
        <>
            <div>
                {item.quantity === 0 &&<button className="btn btn-secondary" onClick={() => addtocart(item)}>Add to cart</button>}
            </div>
            {item.quantity > 0  && <div className="d-flex">
                <button className="btn btn-secondary" onClick={() => onDecrease(item)} style={{backgroundColor: 'gray'}}>-</button>
                <p className="count-display text-center font-weight-bold" style={{ width: '40px', height: '20px' }}>{ item.quantity }</p>
                <button className="btn btn-secondary" onClick={() => onIncrease(item)} style={{backgroundColor: 'gray'}}>+</button>
            </div>}
        </>
     );
}
 
export default ControlButton;