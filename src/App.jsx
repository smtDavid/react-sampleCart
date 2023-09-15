import { useState, useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CardContext, cartReducer, cartInit } from "./store";
function App() {
  const reducer = useReducer(cartReducer, cartInit);
  return (
    <>
      <CardContext.Provider value={reducer}>
        <div className="App">
          <Navbar />
          <div className="container mt-4">
            {/* 外層格線 */}
            <div className="row">
              <div className="col-md-7">
                {/* 內層格線 */}
                <Products />
              </div>
              <div className="col-md-5">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </CardContext.Provider>
    </>
  );
}

export default App;
