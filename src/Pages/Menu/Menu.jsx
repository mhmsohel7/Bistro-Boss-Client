import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/useMenu";
import SectionTitle from "../../Components/SectionTItle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  // data load from custom hook "useMenu". Data gulu "menu" te destructure kora hoise.
  const [menu] = useMenu();
  //then sob data filter kore category wise neya hocche.
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>

      {/* Main Cover Image*/}
      <Cover img={menuImg} title="our menu"></Cover>

      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"
      ></SectionTitle>

      {/* New arekta <Menucategory/> Component make kore,oitate props hisebe "Filter kora" data patabo. then okane map kore data show korabo */}
      {/* Offered Menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Rest Menu Items start */}
      {/* Desserts Menu items */}
      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
      ></MenuCategory>
      {/* Pizza Menu items */}
      <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>
      {/* Salad Menu items */}
      <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>
      {/* Soup Menu items */}
      <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>
      {/* Rest Menu Items end */}
    </div>
  );
};

export default Menu;
