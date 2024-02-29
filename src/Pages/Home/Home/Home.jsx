import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefServiceBg from "../Chef-Service-Bg/ChefServiceBg";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <ChefServiceBg />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
