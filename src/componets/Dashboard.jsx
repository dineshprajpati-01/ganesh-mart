import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  let [data, setData] = useState([]);
  let [page, setpage] = useState(1);
  let itemperpage = 10;

  let products = () => {
    axios
      .get("https://dummyjson.com/products?limit=194&skip=0")
      .then(function (response) {
        // handle success
        console.log(response?.data?.products);
        setData(response?.data?.products);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  };

  useEffect(() => {
    products();
  }, []);

  let maxpage = Math.ceil(data.length / itemperpage);

  let handelprev = () => {
    if (page > 1) setpage(page - 1);
  };

  let handelnext = () => {
    if (page < maxpage) setpage(page + 1);
  };

  let start = (page - 1) * itemperpage;
  let end = start + itemperpage;
  const showData = data.slice(start, end);

  return (
    
    <div className="das_mart">
      <h2 className="py-2">Mart items</h2>

      <div className="row w-100">
        {showData.map((item, index) => {
          return (
            
              <div className="col-4 p-2 m-0" key={index}>
                <Link to={`product/${item.id}`}  className="col-4 " style={{textDecoration:"none"}}>
                <div className="card ">
                  <img src={item.thumbnail} className="card-img-top img-farm-mart" alt="..." />

                  <div className="card-body">
                    <h5 className="card-title text-truncate">{item.title}</h5>
                    <p className="card-text h-230">{item.description}</p>
                    <span className="text-muted font-14">
                      Note: {item.returnpPolicy}
                    </span>
                    <h4>{Math.ceil(item.price * 80)}</h4>
                    {/* <a href="#" className="btn btn-primary">
                      Add to cart
                    </a> */}
                  </div>
                </div>
               </Link>
              </div>
           
          );
        })}
      </div>

      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary" onClick={handelprev}>
          pervious
        </button>

        <button className="btn btn-primary" onClick={handelnext}>
          next
        </button>
      </div>
      
    </div>
  );
};

export default Dashboard;
