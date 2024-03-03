import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-8">
      {/* if title is found, then cover will found. */}
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-8 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {/* Order Now Button */}
      <div className="text-center mt-6 mb-6">
        <Link to="/order">
          <button className="btn btn-outline border-0 border-b-4">
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
