import chefImg from "../../../assets/home/chef-service.jpg";
import { Parallax } from "react-parallax";

const ChefServiceBg = () => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={chefImg} //backgroud image
      bgImageAlt="the dog"
      strength={-200}
    >
      {/* Blur transition from min to max */}
      <div
        className="hero h-[500px]"
        // style={{
        //   backgroundImage: `url("${chefImg}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-40 bg-black w-[900px] h-1/2 "></div>
        <div className="hero-content text-center text-neutral-content w-[700px] ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">Bistro Boss</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ChefServiceBg;
