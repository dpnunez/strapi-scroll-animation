import { FC } from 'react';
import { motion } from 'framer-motion';
import { Container } from './styles';
import { galeryBackground } from '../../constants';

interface GaleryProps {
	activeStep: number
}

const Galery: FC<GaleryProps> = ({ activeStep }) => (
  <Container
    transition={{
      type: 'spring',
      stiffness: 700,
      damping: 30,
      mass: 1.3,
    }}
    animate={{ transform: activeStep % 2 ? 'translateX(100%)' : 'translateX(0%)' }}
  >
    <motion.div
      className="assets"
      animate={{ transform: activeStep % 2 ? 'rotateY(-15deg) rotateX(10deg)' : 'rotateY(15deg) rotateX(10deg)' }}
    >
      <img
        src={galeryBackground}
        alt="galery-background"
      />
    </motion.div>
  </Container>
);

export { Galery };
