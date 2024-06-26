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
      <div className="grid lg:grid-cols-[178px_178px_178px_178px_178px_178px] justify-center my-56 gap-6">
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
          <div className="grid gap-y-6 lg:grid-cols-[400px_400px_400px] justify-center gap-12 cursor-pointer">
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
      {/* Why choose us section */}
      <div className="bg-[#FAF4E8] dm-sans p-12">
        <div className="text-center space-y-3">
          <h1 className="playfair-display text-3xl font-medium">
            Why Choose Use
          </h1>
          <h3 className="font-light">
            WE CURATE INSPIRATION FOR THE HOME, CONNECTING THE <br /> CREATIVE
            WORK OF ARTISANS & DESIGNERS TO PEOPLE <br /> AND PLACES AROUND THE
            WORLD
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-center gap-12 my-24">
          <div className="flex flex-col w-[389px]">
            <div>
              <img
                className="w-[160px] mx-auto mb-6"
                src="https://i.ibb.co/FDmbMNQ/Why-Us-Sec-1.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h1>FREE SHIPPING</h1>
              <p>
                Shipping fee? Don’t worry, all orders over $75.00 will be on us.
                Just sit & shopping
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[389px]">
            <div>
              <img
                className="w-[160px] mx-auto mb-6"
                src="https://i.ibb.co/NLcPpPY/Why-Us-Sec-2.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h1>SECURE PAYMENT</h1>
              <p>
                Mintie offers multiple payment options so the customers can
                easily to access their favorite one
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[389px]">
            <div>
              <img
                className="w-[160px] mx-auto mb-6"
                src="https://i.ibb.co/nzNkWwj/Why-Us-Sec-3.png"
                alt=""
              />
            </div>
            <div className="text-center">
              <h1>FAST & SAFE DELIVERY</h1>
              <p>
                By using most popular delivery services, you will receive your
                package within 2-3 business days
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
