
import Navbar from '../components/Navbar';

const Story = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Story Page</h1>
          <p className="text-xl text-muted-foreground">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Story;
