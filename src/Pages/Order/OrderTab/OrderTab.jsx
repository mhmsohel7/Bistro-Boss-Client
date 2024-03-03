import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    // order teke je props ta patano hoise, oita k "map" kore pottekta data <FoodCard/> component e dekabe.
    <div className="grid md:grid-cols-3 gap-8">
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;
