import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  const { img, title, _id } = data;
  return (
    <div>
      <Link to={`/items/${_id}`}>
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className=" m-1">
            <img
              className="w-[400px] rounded-2xl h-[265px] cursor-pointer"
              src={img}
              alt=""
            />
            <p className="text-center mt-6 text-white text-xl">{title}</p>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content top-[221px] py-3 rounded-b-2xl z-[1] w-[396px] p-2 bg-purple-700 text-white"
          >
            <li>click to view details</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

Products.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Products;
