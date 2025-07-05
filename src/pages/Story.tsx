
import Navbar from '../components/Navbar';
import BackgroundAnimations from '../components/BackgroundAnimations';

const Story = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundAnimations opacity={0.1} showConcentric={false} showCurves={true} />
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Story Page</h1>
            <p className="text-xl text-muted-foreground">Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
