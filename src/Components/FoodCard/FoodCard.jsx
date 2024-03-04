const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image} alt="Shoes" className="rounded-xl" />
      </figure>
      <p className="bg-slate-900 text-white font-bold absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title uppercase">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
          <button className="btn btn-outline border-0 border-b-4 bg-slate-100 text-orange-600 border-orange-400">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
