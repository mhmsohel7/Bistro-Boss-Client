import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTItle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's New"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>

          <div className="flex gap-6">
            {/* Category start */}
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Category*</span>
              </div>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled value="default">
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>
            {/* Category end */}
            {/* Price start */}
            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
            {/* Price end */}
          </div>

          {/* Recipe details start */}
          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe details"
            ></textarea>
          </label>
          {/* Recipe details end */}

          {/* File Input */}
          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Pick a file*</span>
            </div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input file-input-bordered w-full"
            />
          </label>
          {/* File input end */}

          <button className="btn">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
