import PropTypes from "prop-types";
import { IoIosStar } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftListDetails = ({ data }) => {
  const { image, item_name, price, rating, stockStatus, customization, _id } =
    data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://art-and-craft-store-server-nine.vercel.app/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            location.reload();
          });
      }
    });
  };
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="portrait" />
        </figure>
        <div className="card-body">
          <h2 className="card-title mb-6">{item_name}</h2>
          <hr />
          <div className=" grid grid-cols-2 gap-6 my-6">
            <h3>Price - {price} $</h3>
            <h3 className="flex items-center gap-3">
              Rating - {rating} <IoIosStar />
            </h3>
            <h3>Customization - {customization}</h3>
            <h3>Stock Status - {stockStatus}</h3>
          </div>
          <div className="card-actions justify-end">
            <div>
              <Link
                to={`My-Arts-And-Crafts-Update-Page/${_id}`}
                className="btn btn-success"
              >
                Update
              </Link>
            </div>
            <div>
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-error"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

MyArtAndCraftListDetails.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MyArtAndCraftListDetails;
