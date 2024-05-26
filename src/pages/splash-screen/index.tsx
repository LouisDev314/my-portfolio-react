import { IBaseComponent } from '@interfaces/base-component.interface';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ISplashScreen extends IBaseComponent {
  setToShowSplashScreen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SplashScreen = ({ setToShowSplashScreen }: ISplashScreen) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) setProgress((prev) => (prev += 1));
    }, 15);
    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setToShowSplashScreen(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, [setToShowSplashScreen]);

  return (
    <motion.div
      className="w-full h-full flex flex-col justify-center items-center"
      animate={
        progress === 100 && {
          opacity: 0,
          transition: { duration: 1 },
          transitionEnd: {
            display: 'none',
          },
        }
      }
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1.25 }}
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        Louis Chan
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col justify-center items-center"
      >
        {progress}%
        <progress
          className="progress progress-primary w-56"
          value={progress}
          max="100"
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
