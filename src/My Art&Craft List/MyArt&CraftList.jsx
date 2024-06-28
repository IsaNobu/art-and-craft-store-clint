import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import MyArtAndCraftListDetails from "./MyArt&CraftListDetails";

const MyArtAndCraftList = () => {
  const { user } = useContext(AuthContext);
  const getData = useLoaderData();

  const filteredData = getData.filter((data) => data.email === user.email);

  return (
    <div className="grid grid-cols-3 justify-items-center mt-24">
      {filteredData.map((data) => (
        <MyArtAndCraftListDetails
          key={data._id}
          data={data}
        ></MyArtAndCraftListDetails>
      ))}
    </div>
  );
};

export default MyArtAndCraftList;
