import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        //popular items filtering from menu.json data
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <>
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        {/* data load from state */}
        <div className="grid md:grid-cols-2 gap-8">
          {menu.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="btn btn-outline border-b-4">VIEW FULL MENU</button>
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
