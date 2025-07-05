
import Navbar from '../components/Navbar';
import ExploreSection from '../components/ExploreSection';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <ExploreSection />
      </div>
    </div>
  );
};

export default Explore;
