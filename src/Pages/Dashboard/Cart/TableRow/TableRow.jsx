import { FaTrashAlt } from "react-icons/fa";

const TableRow = ({ item, index }) => {
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          </div>
        </td>
        <td>{item.name}</td>
        <td> ${item.price} </td>
        <th>
          <button className="btn btn-ghost btn-lg">
            <FaTrashAlt className="text-red-600"></FaTrashAlt>
          </button>
        </th>
      </tr>
    </>
  );
};

export default TableRow;
