import Slider from "./slider/Slider";
import "../index.css";
import { useEffect, useState } from "react";
import Products from "./products/Products";
import CraftedItems from "./CraftedItems/CraftedItems";

const Home = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((result) => setData(result));

    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((result) => setItems(result));
  }, []);
  return (
    <div>
      <div>
        <Slider></Slider>
      </div>

      {/* craft item section */}

      <div className="grid grid-cols-[178px_178px_178px_178px_178px_178px] justify-center my-56 gap-6">
        {items.map((item) => (
          <CraftedItems key={item._id} data={item}></CraftedItems>
        ))}
      </div>

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
              <Products key={data._id} data={data}></Products>
            ))}
          </div>
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
