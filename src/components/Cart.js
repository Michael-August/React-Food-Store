import CartItems from "./CartItems";

const Cart = ({cart, items, onDelete, totalprice, onRemoveAll}) => {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Items</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                { <tbody>
                    {cart.map((c) => <CartItems key={c.id} cartitem={c} items={items} onDelete={onDelete} />)}

                    <tr>
                        <th>Total</th>
                        <th></th>
                        <th>${ totalprice }</th>
                        <th className="text-danger" onClick={() => onRemoveAll()}>Remove all</th>
                    </tr>
                </tbody>}
            </table>
        </div>
    );
}
 
export default Cart;