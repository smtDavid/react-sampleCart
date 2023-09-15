import productsData from "../assets/productsData";
import { useContext } from "react";
import { CardContext } from "../store";
const Products = () => {
  const [state, dispatch] = useContext(CardContext);
  return (
    <div className="row row-cols-3 g-3">
      {productsData.map((item) => {
        return (
          <div className="col" key={item.id}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">
                  {item.title}
                  <span className="float-end">NT$$ {item.price}</span>
                </h6>
                <select
                  name=""
                  id=""
                  value={1}
                  className="form-select mb-3"
                  onChange={(e) => {
                    e.preventDefault();
                    let number = parseInt(e.target.value);
                    console.log(number);
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        ...item,
                        quantity: number,
                      },
                    });
                  }}
                >
                  {[...Array(20)].map((item, index) => {
                    return (
                      <option value={index + 1} key={index + 1}>
                        {index + 1}
                      </option>
                    );
                  })}
                </select>
                <button
                  onClick={() => {
                    dispatch({
                      type: "ADD_TO_CART",
                      payload: {
                        ...item,
                        quantity: 1,
                      },
                    });
                  }}
                  type="button"
                  className="btn btn-outline-primary w-100"
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Products;
