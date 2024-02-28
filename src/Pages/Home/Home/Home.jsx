import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefServiceBg from "../Chef-Service-Bg/ChefServiceBg";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ChefServiceBg />
      <PopularMenu />
      <Featured />
    </div>
  );
};

export default Home;
