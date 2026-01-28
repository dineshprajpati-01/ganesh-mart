import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidemart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then(function (response) {
        // handle success
        console.log(response?.data);
        setData(response?.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);

  return (
    <div className="side-mart">

        <ul className="list-group">

             {
            data.map((item,index)=>{
                return  <li key={index} className="list-group-item  side-mart-item">{item.name}</li>
            })
        }
          
        </ul>

     
    </div>
  );
};

export default Sidemart;
