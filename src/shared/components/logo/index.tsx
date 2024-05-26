import { IBaseComponent } from '@interfaces/base-component.interface';
import { motion } from 'framer-motion';

interface ILogo extends IBaseComponent {}

const Logo = (props: ILogo) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ rotate: 0, scale: 1.25 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      className={props.class}
    >
      Louis Chan
    </motion.div>
  );
};

export default Logo;
