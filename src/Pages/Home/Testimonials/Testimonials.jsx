import SectionTitle from "../../../Components/SectionTItle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

//Import React Rating
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; //must require css

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  //data load from Reviews data.
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20">
      <SectionTitle
        subHeading="What Our Client Say"
        heading="Testimonials"
      ></SectionTitle>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {/* Data load from state using map */}
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="my-5 mx-24 flex flex-col items-center">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating} //value cones from database
                readOnly
              />
              <p className="py-8">{review.details}</p>
              <h3 className="text-2xl text-orange-400 text-center">
                {review.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
