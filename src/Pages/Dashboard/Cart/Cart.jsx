import useCart from "../../../Hooks/useCart";
import TableRow from "./TableRow/TableRow";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl">Items : {cart.length}</h2>
        <h2 className="text-4xl">Total Price : {totalPrice}</h2>
        <button className="btn btn-primary">Pay</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <TableRow key={item._id} item={item} index={index}></TableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
