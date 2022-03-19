import ControlButton from "./ControlButton";
import '../font-awesome-4.7.0/css/font-awesome.min.css'

const CartItems = ({ cartitem, onDelete }) => {
    return (
        <>
            {cartitem.quantity > 0 ? <tr>
                <th scope="row">{cartitem.itemName}</th>
                <td>{ cartitem.quantity }</td>
                {cartitem.quantity > 1 && <td>{ cartitem.totalPrice }</td>}
                {cartitem.quantity === 1 && <td>{ cartitem.price }</td>}
                {/* <td>{ cartitem.price }</td> */}
                <td><i className="fa fa-times text-danger" onClick={() => onDelete(cartitem.id)}></i></td>
            </tr> : 'No Item in your cart, kindly add some...'}
      </>
    );
}
 
export default CartItems;