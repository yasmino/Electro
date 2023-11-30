import NavBar from "../Components/Navbar/Navbar";
import Slider from "../Components/Slider/Slider";
import FeaturesBar from "../Components/features/FeaturesBar";
import CategorySection from './Components/category-section/CategorySection';
import CategoryBar from './Components/category-bar/CategoryBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <CategoryBar />
      <Slider />
      <FeaturesBar />
      <CategorySection />
    </div>
  );
};

export default Home;
