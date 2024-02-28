import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${featuredImg}")`,
      }}
      className="pt-8 my-20 bg-fixed"
    >
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-20 pt-10 px-36 text-white bg-slate-500 bg-opacity-40">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2023</p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            neque, facilis alias perferendis molestiae, eveniet aut debitis
            quae, dolor tenetur qui nulla tempora quisquam obcaecati facere
            minus? Quidem culpa nihil iure laboriosam nemo. Fugiat velit soluta,
            amet placeat asperiores pariatur, corporis, cumque quia obcaecati
            inventore dicta laboriosam quibusdam sit adipisci?
          </p>
          <button className="btn btn-outline uppercase border-0 border-b-4 mt-4 text-white">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
