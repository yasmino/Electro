import Slider from "../Components/Slider/Slider";
import FeaturesBar from "../Components/features/FeaturesBar";
import CategorySection from "../Components/category-section/CategorySection";

const Home = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <Slider />
      <FeaturesBar />
      <CategorySection cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default Home;
