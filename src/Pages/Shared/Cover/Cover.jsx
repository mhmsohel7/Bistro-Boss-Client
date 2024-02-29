import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img} //backgroud image
      bgImageAlt="the menu"
      strength={-200}
      className="mb-16"
    >
      <div
        className="hero h-[600px]"
        // style={{
        //   backgroundImage: `url("${img}")`,
        // }}
      >
        <div className="hero-overlay bg-opacity-60 bg-black w-[900px] h-1/2 "></div>
        <div className="hero-content text-center text-neutral-content w-[700px] ">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
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

export default Cover;
