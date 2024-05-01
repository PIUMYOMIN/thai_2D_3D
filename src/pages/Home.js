import Thailand2DSection from "../components/Thailand2DSection";
import ModernSectionCard from "../components/ModernSectionCard";
import { Link } from "react-router-dom";
import Personal_actions from "../components/Personal_actions";
import Carousel from "../components/Carousel";

const Home = () => {
  return <div className="px-3">
      <Carousel />
      <Thailand2DSection />
      <ModernSectionCard />
      <Personal_actions />
    </div>;
};

export default Home;
