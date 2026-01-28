import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTocart } from "../slice/counterSlice";

const Product = () => {
  let [data, setData] = useState([]);
  let { id } = useParams();
  let dispatch = useDispatch();
  let [disbale,setDisable] = useState(false)
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (response) {
        // handle success
        setData(response?.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [id]);

  let manageCart = (items) => {
      dispatch(addTocart(items))
      setDisable(true)
  };

  return (
    <div>
      <div className="container pt-3">
        <h4 className="text-center mb-3">Product Details</h4>

        <div className="card p-3 m-auto" style={{ maxWidth: "500px" }}>
          <h5 className="text-center">{data.title}</h5>

          <p className="text-center text-muted">{data.description}</p>

          <hr />

          <p>
            <b>Rating:</b> {data.rating}
          </p>
          <p>
            <b>Stock:</b> {data.stock}
          </p>
          <p>
            <b>Brand:</b> {data.brand}
          </p>
          <p>
            <b>SKU:</b> {data.sku}
          </p>
          <p>
            <b>Tags:</b> {data.tags}
          </p>

          <div className="d-flex justify-content-center">
            <button disabled={disbale} className="btn btn-primary p-2 fw-light" onClick={()=>manageCart(data)} >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
