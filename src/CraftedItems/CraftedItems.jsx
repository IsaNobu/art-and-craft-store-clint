import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CraftedItems = ({ data }) => {
  const { image, price, item_name, _id } = data;
  return (
    <div>
      <Link to={`/item-details/${_id}`}>
        <div
          className="cursor-pointer hover:border-2 p-3 rounded-lg tooltip"
          data-tip="Click to view details"
        >
          <div>
            <img className="w-[178px] h-[133.5px]" src={image} alt="" />
          </div>
          <div className="text-center space-y-2 mt-3">
            <h3 className="font-medium">{item_name}</h3>
            <h5 className="font-light">Price - {price} $</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

CraftedItems.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CraftedItems;

// artlover123@gmail.com
// creative.mind.sarah@gmail.com
// john.paintbrush@gmail.com
// _isabella_artist@gmail.com
// michael_drawings@gmail.com
