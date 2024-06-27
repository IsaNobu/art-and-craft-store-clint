import { Link, useLoaderData } from "react-router-dom";

const AllArtAndCraftItems = () => {
  const data = useLoaderData();
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Painter</th>
              <th>Category</th>
              <th>Works Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.username}</div>
                    </div>
                  </div>
                </td>
                <td>{user.subcategoryName}</td>
                <td>{user.item_name}</td>
                <th>
                  <Link
                    to={`/item-details/${user._id}`}
                    className="btn btn-ghost btn-xs"
                  >
                    details
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtAndCraftItems;
