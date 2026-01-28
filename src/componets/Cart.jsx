import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  let cartData = useSelector((state) => state.counter.cart);
  console.log(cartData);

  let total = 0;
  
    for (let i = 0; i < cartData.length; i++) {
        total += cartData[i].price * 90 * 1.18;
    }

  return (
    <div>
      {cartData.map((item, index) => {
        return (
          <div>
            <div
              className="card p-3 mt-3 m-auto"
              style={{ maxWidth: "1000px" }}
            >
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Index</th>
                    <th scope="col">Name+Photo</th>
                    <th scope="col">brand</th>
                    <th scope="col">Price</th>
                    <th scope="col">GST</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{item.id}</th>
                    <div className="d-flex justify-content-between align-item-center">
                      <div className="d-flex flex-column">
                        <img
                          src={item.thumbnail}
                          width={200}
                          height={200}
                          alt=""
                        />
                      </div>
                      <div className="d-flex flex-column justify-content-center">
                        <h3>name: {item.title}</h3>
                        <p>description: {item.description}</p>
                      </div>
                    </div>

                    <td>{item.brand}</td>
                    <td>
                      <h4> ₹{Math.round(item.price * 90)}</h4>
                    </td>
                    <td>
                      <h4> {Math.round(18)}</h4>
                    </td>
                    <td>
                      <h3> ₹{Math.round(item.price * 90 * 1.18)}</h3>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h2 style={{ textAlign: "right", marginRight: "50px" }}>
                Total Amount : ₹{Math.round(total)}
              </h2>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
