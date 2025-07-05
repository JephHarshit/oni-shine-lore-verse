
import Navbar from '../components/Navbar';
import ExploreSection from '../components/ExploreSection';
import BackgroundAnimations from '../components/BackgroundAnimations';

const Explore = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimations opacity={0.08} showConcentric={true} showCurves={false} />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <ExploreSection />
        </div>
      </div>
    </div>
  );
};

export default Explore;
