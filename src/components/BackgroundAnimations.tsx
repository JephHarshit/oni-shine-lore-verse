
import { motion } from 'framer-motion';

interface BackgroundAnimationsProps {
  opacity?: number;
  showConcentric?: boolean;
  showCurves?: boolean;
  animationSpeed?: number;
}

const BackgroundAnimations = ({ 
  opacity = 0.15, 
  showConcentric = true, 
  showCurves = true,
  animationSpeed = 1 
}: BackgroundAnimationsProps) => {
  const baseOpacity = opacity;
  const duration = 20 / animationSpeed;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Concentric Circles */}
      {showConcentric && (
        <>
          {/* Top Left Concentric */}
          <motion.div
            className="absolute -top-20 -left-20"
            animate={{ rotate: 360 }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Top Right Concentric */}
          <motion.div
            className="absolute top-32 -right-16"
            animate={{ rotate: -360 }}
            transition={{ duration: duration * 1.5, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity * 0.8 }}
          >
            <svg width="150" height="150" viewBox="0 0 150 150">
              <circle cx="75" cy="75" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="75" cy="75" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="75" cy="75" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Center Concentric */}
          <motion.div
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: duration * 2, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity * 0.6 }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Bottom Left Concentric */}
          <motion.div
            className="absolute bottom-20 -left-10"
            animate={{ rotate: -360 }}
            transition={{ duration: duration * 1.2, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity * 0.7 }}
          >
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="90" cy="90" r="50" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="90" cy="90" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          {/* Bottom Right Concentric */}
          <motion.div
            className="absolute -bottom-10 -right-20"
            animate={{ rotate: 360 }}
            transition={{ duration: duration * 0.8, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity * 0.9 }}
          >
            <svg width="160" height="160" viewBox="0 0 160 160">
              <circle cx="80" cy="80" r="65" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="80" cy="80" r="45" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="80" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>
        </>
      )}

      {/* Curved Lines */}
      {showCurves && (
        <>
          {/* Flowing Curve 1 */}
          <motion.div
            className="absolute top-1/4 left-1/4"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ duration: duration * 0.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: baseOpacity * 0.8 }}
          >
            <svg width="300" height="100" viewBox="0 0 300 100">
              <path 
                d="M 0 50 Q 75 10 150 50 T 300 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
              />
            </svg>
          </motion.div>

          {/* Flowing Curve 2 */}
          <motion.div
            className="absolute top-1/2 right-1/4"
            animate={{ 
              y: [0, 15, 0],
              x: [0, -15, 0]
            }}
            transition={{ duration: duration * 0.7, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: baseOpacity * 0.6 }}
          >
            <svg width="250" height="80" viewBox="0 0 250 80">
              <path 
                d="M 0 40 Q 62.5 0 125 40 T 250 40" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Spiral Curve */}
          <motion.div
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: duration * 3, repeat: Infinity, ease: "linear" }}
            style={{ opacity: baseOpacity * 0.5 }}
          >
            <svg width="200" height="200" viewBox="0 0 200 200">
              <path 
                d="M 100 100 Q 100 50 150 100 Q 200 100 150 150 Q 100 200 50 150 Q 0 100 50 50 Q 100 0 150 50" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Connecting Curves */}
          <motion.div
            className="absolute top-3/4 left-1/6"
            animate={{ 
              pathLength: [0, 1, 0],
            }}
            transition={{ duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: baseOpacity * 0.7 }}
          >
            <svg width="400" height="120" viewBox="0 0 400 120">
              <motion.path 
                d="M 0 60 Q 100 20 200 60 Q 300 100 400 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: [0, 1, 0] }}
                transition={{ duration: duration * 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>

          {/* Vertical Connecting Lines */}
          <motion.div
            className="absolute top-1/6 right-1/3"
            animate={{ 
              opacity: [baseOpacity * 0.3, baseOpacity * 0.8, baseOpacity * 0.3]
            }}
            transition={{ duration: duration * 0.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="80" height="300" viewBox="0 0 80 300">
              <path 
                d="M 40 0 Q 20 75 40 150 Q 60 225 40 300" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default BackgroundAnimations;
