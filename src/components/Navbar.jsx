import { useContext } from "react";
import { CardContext } from "../store";
const Navbar = () => {
  const [state] = useContext(CardContext);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand">甜點蛋糕店</span>
        <button
          className="btn btn-outline-dark position-relative"
          type="submit"
        >
          購物車
          <span className="badge rounded-pill bg-danger position-absolute top-0 start-100 translate-middle">
            {state.cartList.length}
          </span>
        </button>
      </div>
    </nav>
  );
};
export default Navbar;
