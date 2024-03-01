import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  //menu hook from useMenu.jsx custom hook
  const [menu] = useMenu();

  const popularItems = menu.filter((item) => item.category === "popular");
  return (
    <>
      <section className="mb-12">
        <SectionTitle
          heading="From Our Menu"
          subHeading="Popular Items"
        ></SectionTitle>
        {/* data load from state */}
        <div className="grid md:grid-cols-2 gap-8">
          {popularItems.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <div className="text-center mt-6">
          <button className="btn btn-outline border-0 border-b-4">
            VIEW FULL MENU
          </button>
        </div>
      </section>
    </>
  );
};

export default PopularMenu;
