import Slider from "./slider/Slider";
import "../index.css";
import { useEffect, useState } from "react";
import Products from "./products/Products";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);
  return (
    <div>
      <Slider></Slider>
      {/* SubCategories */}
      <div className="my-12">
        <div>
          <img
            src="https://mintie.boostifythemes.com/wp-content/uploads/2021/11/bg-product-h3-1.jpg"
            alt=""
          />
        </div>
        <div className="bg-[#E5E2DD] py-12">
          <h1 className="playfair-display text-3xl font-light text-center mb-12">
            Painting and Drawing
          </h1>
          <div className="grid grid-cols-[400px_400px_400px] justify-center gap-12 cursor-pointer">
            {data.map((data) => (
              <Products key={data._key} data={data}></Products>
            ))}
          </div>
          {console.log(data)}
        </div>
        <div>
          <img
            src="https://mintie.boostifythemes.com/wp-content/uploads/2021/11/bg-product-h3-3.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
