import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import MyArtAndCraftListDetails from "./MyArt&CraftListDetails";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  const getData = useLoaderData();

  const filteredData = getData.filter((data) => data.email === user.email);
  const [listings, setListings] = useState(filteredData);

  const handleFilter = (filter) => {
    if (filter === "All") {
      setListings(filteredData);
    } else if (filter === "Yes") {
      const onlyYesListings = filteredData.filter(
        (a) => a.customization === "Yes"
      );
      setListings(onlyYesListings);
    } else if (filter === "No") {
      const onlyNoListings = filteredData.filter(
        (a) => a.customization === "No"
      );
      setListings(onlyNoListings);
    }
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow cursor-pointer"
          >
            <li onClick={() => handleFilter("All")}>All</li>
            <li onClick={() => handleFilter("Yes")}>Yes</li>
            <li onClick={() => handleFilter("No")}>No</li>
          </ul>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 justify-items-center mt-24">
        {listings.map((data) => (
          <MyArtAndCraftListDetails
            key={data._id}
            data={data}
          ></MyArtAndCraftListDetails>
        ))}
      </div>
    </div>
  );
};

export default MyArtAndCraftList;
