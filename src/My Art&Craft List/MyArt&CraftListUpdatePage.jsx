import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const MyArtAndCraftListUpdatePage = () => {
  const data = useLoaderData();
  const { item_name, price, rating, _id } = data;

  const handleUpdate = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const itemName = form.get("i-name");
    const url = form.get("url");
    const price = form.get("price");
    const rating = form.get("rating");
    const Customizability = form.get("Customizability");
    const stockStatus = form.get("stock-status");

    const updatedInfo = {
      itemName,
      url,
      price,
      rating,
      Customizability,
      stockStatus,
    };

    console.log(_id);

    fetch(`http://localhost:5000/item-details/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount > 0) {
          toast("Data updated successfully");
        }
      });
  };
  return (
    <div className="border w-[300px] p-6 mx-auto mt-12 rounded">
      <ToastContainer />
      <form onSubmit={handleUpdate}>
        <div>
          <label className="label">
            <span className="label-text">Item Name</span>
          </label>
          <input
            type="text"
            defaultValue={item_name}
            name="i-name"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Copy yor photo URL here"
            name="url"
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            defaultValue={price}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Ratting</span>
          </label>
          <input
            type="text"
            name="rating"
            defaultValue={rating}
            className="input input-bordered input-md w-full max-w-xs"
          />
        </div>
        <div className="flex items-center">
          <div>
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <select
              tabIndex={0}
              role="button"
              name="Customizability"
              className="btn m-1 input"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <select
              tabIndex={0}
              role="button"
              name="stock-status"
              className="btn m-1 input"
            >
              <option>In Stock</option>
              <option>Made in Order</option>
            </select>
          </div>
        </div>
        <div>
          <input type="submit" className="btn btn-success" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default MyArtAndCraftListUpdatePage;
