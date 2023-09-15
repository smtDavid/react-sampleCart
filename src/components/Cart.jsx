import { useContext } from "react";
import { CardContext } from "../store";
const Cart = () => {
  const [state, dispatch] = useContext(CardContext);
  return (
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          {console.log(state.cartList)}
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_CART_ITEM",
                        payload: {
                          ...item,
                        },
                      });
                    }}
                    type="button"
                    className="btn btn-sm"
                  >
                    X
                  </button>
                </td>
                <td>
                  <img className="table-image" src={item.img} alt="" />
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">NT$ ${item.price}</small>
                </td>
                <td>
                  <select
                    name=""
                    id=""
                    className="form-select"
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      const number = parseInt(e.target.value);
                      dispatch({
                        type: "CHANGE_CART_QUANTITY",
                        payload: {
                          ...item,
                          quantity: number,
                        },
                      });
                    }}
                  >
                    {[...Array(20)].map((newItem, index) => {
                      return (
                        <option value={index + 1} key={index}>
                          {index + 1}
                        </option>
                      );
                    })}
                  </select>
                </td>
                <td className="text-end">NT$ ${item.price * item.quantity}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="text-end" colSpan={5}>
              總金額 NT$ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Cart;
