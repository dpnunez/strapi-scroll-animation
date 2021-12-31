import { FC } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from './styles';
import { galeryBackground, sections } from '../../constants';

interface GaleryProps {
	activeStep: number
}

const Galery: FC<GaleryProps> = ({ activeStep }) => {
  const side = activeStep % 2 ? 'right' : 'left';

  const elasticAnimationConfig = {
    type: 'spring',
    stiffness: 700,
    damping: 80,
    mass: 6,
  };

  const elasticAnimationSecondaryConfig = {
    default: {
      duration: 0.3,
    },
    opacity: { duration: 0.2 },
    delay: 0.1,
  };

  const sideVariants = {
    right: { transform: 'translateX(100%)' },
    left: { transform: 'translateX(0%)' },
  };

  const rotationVariants = {
    right: { transform: 'rotateY(-15deg) rotateX(10deg)' },
    left: { transform: 'rotateY(15deg) rotateX(10deg)' },
  };

  const secondaryImageVariants = {
    enter: {
      y: 500,
      opacity: 0,
      zIindex: 2,

    },
    center: {
      y: 0,
      opacity: 1,
      x: side === 'right' ? -20 : '40%',
    },
    exit: {
      y: 500,
      opacity: 0,
    },
  };

  return (
    <Container
      transition={elasticAnimationConfig}
      animate={side}
      variants={sideVariants}
    >
      <motion.div
        className="assets"
        animate={side}
        variants={rotationVariants}
      >
        <AnimatePresence>
          <motion.img
            className="galery-secondary"
            key={activeStep}
            src={sections[activeStep]?.asset}
            variants={secondaryImageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={elasticAnimationSecondaryConfig}
          />

        </AnimatePresence>
        <img
          className="galery-background"
          src={galeryBackground}
          alt="galery-background"
        />
      </motion.div>
    </Container>
  );
};

export { Galery };
