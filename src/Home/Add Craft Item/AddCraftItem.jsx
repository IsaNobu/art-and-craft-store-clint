import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddCraftItem = () => {
  const handleForm = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const itemName = form.get("i-name");
    const subCat = form.get("subCat");
    const url = form.get("url");
    const shortDes = form.get("short-des");
    const price = form.get("price");
    const rating = form.get("rating");
    const time = form.get("time");
    const email = form.get("email");
    const username = form.get("username");
    const Customizability = form.get("Customizability");
    const stockStatus = form.get("stock-status");

    if (Customizability === "Customizability") {
      return toast("Please select Customizability");
    } else if (stockStatus === "Stock Status") {
      return toast("Please select stock status");
    }

    const data = {
      item_name: itemName,
      subcategory_Name: subCat,
      image: url,
      short_description: shortDes,
      price: price,
      rating: rating,
      processing_time: time,
      stockStatus: stockStatus,
      customization: Customizability,
      user_email: username,
      email: email,
    };

    fetch("http://localhost:5000/data", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className="flex justify-center md:flex-row flex-col items-center my-24">
      <ToastContainer />
      <div className="p-6">
        <img
          className=" h-[792px] md:w-[500px]"
          src="https://i.ibb.co/dMhH07N/form-logo.jpg"
          alt=""
        />
      </div>
      <div className="bg-base-200 p-6 md:w-[500px] w-[377px] ">
        <form onSubmit={handleForm}>
          <div className="grid grid-cols-2 justify-items-center gap-6">
            <div>
              <label className="label">
                <span className="label-text">Item Name</span>
              </label>
              <input
                required
                type="text"
                placeholder="Item Name"
                name="i-name"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text">Category Name</span>
              </label>
              <input
                required
                type="text"
                name="subCat"
                placeholder="Category Name"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                required
                type="url"
                name="url"
                placeholder="Photo URL"
                className="input input-bordered input-md w-[315px] lg:w-[430px]"
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <textarea
                required
                placeholder="describe your product here"
                name="short-des"
                className="textarea textarea-bordered textarea-md w-[315px] lg:w-[430px]"
              ></textarea>
            </div>
            <div>
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                required
                type="text"
                name="price"
                placeholder="Item Price"
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
                placeholder="Rating"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>
            <select
              tabIndex={0}
              role="button"
              name="Customizability"
              className="btn m-1 input"
            >
              <option>Customizability</option>
              <option>Yes</option>
              <option>No</option>
            </select>
            <select
              tabIndex={0}
              role="button"
              name="stock-status"
              className="btn m-1 input"
            >
              <option>Stock Status</option>
              <option>In Stock</option>
              <option>Made in Order</option>
            </select>
            <div>
              <label className="label">
                <span className="label-text">Processing Time</span>
              </label>
              <input
                required
                type="text"
                name="time"
                placeholder="Processing Time (min.)"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                required
                type="text"
                placeholder="Username"
                name="username"
                className="input input-bordered input-md w-full max-w-xs"
              />
            </div>
            <div className="col-span-2">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                required
                type="email"
                placeholder="enter your email"
                name="email"
                className="input input-bordered input-md w-[315px] lg:w-[430px]"
              />
            </div>
          </div>
          <div>
            <button className="btn bg-base-300 btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-6 w-[315px] lg:w-[430px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
