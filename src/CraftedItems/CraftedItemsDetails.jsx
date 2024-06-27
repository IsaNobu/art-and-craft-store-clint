import { useLoaderData } from "react-router-dom";
import "../index.css";

const CraftedItemsDetails = () => {
  const data = useLoaderData();

  const {
    image,
    item_name,
    price,
    rating,
    short_description,
    stockStatus,
    subcategoryName,
    processingTime,
    customization,
    username,
  } = data;

  return (
    <div className="flex lg:flex-row flex-col justify-center gap-12 my-24">
      <div>
        <img className="lg:w-[569px] lg:h-[569px]" src={image} alt="" />
      </div>
      <div className="space-y-4 lg:w-[600px] p-6">
        <h1 className="dm-sans font-medium text-3xl">{item_name}</h1>
        <h1 className="dm-sans font-medium text-xl">Painter: {username}</h1>
        <h3 className="text-red-600 text-xl font-semibold">{price} $</h3>
        <h3 className="flex items-center">
          <div className="rating">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
          <span className="ml-2">{rating} (out of 5)</span>
        </h3>
        <p>{short_description}</p>
        <h6>Processing Time: {processingTime}</h6>
        <h6 className="text-xl font-semibold">
          Available: <span className="text-red-600">{stockStatus}</span>
        </h6>
        <hr />
        <div className="flex items-center gap-6">
          <input
            type="number"
            className="w-[100px] h-[50px] rounded-full input bg-base-300"
            placeholder="1"
          />
          <button className="btn">Add to Cart</button>
        </div>
        <div>
          <div className="form-control">
            <label className="cursor-pointer label">
              <span className="font-medium text-xl">Add to Favorite list</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-secondary"
              />
            </label>
          </div>
        </div>
        <div className="space-y-3 mt-12">
          <h6>SKU: OF58296-HFF</h6>
          <h6>CATEGORIES: {subcategoryName}</h6>
          <h6>Customization: {customization}</h6>
          <h6>TAGS: ACCESSORIES, DECOR, FRAGRANCES</h6>
        </div>
      </div>
    </div>
  );
};

export default CraftedItemsDetails;
