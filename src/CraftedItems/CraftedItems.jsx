import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

const CraftedItems = ({ data }) => {
  const { image, price, item_name, _id } = data;
  return (
    <div>
      <Tooltip id="my-tooltip" />
      <Link to={`/item-details/${_id}`}>
        <div
          className="cursor-pointer hover:border-2 p-3 rounded-lg"
          data-tooltip-id="my-tooltip"
          data-tooltip-content="Click to view details"
          data-tooltip-place="top"
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
