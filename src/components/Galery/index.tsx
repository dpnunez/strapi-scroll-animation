import { FC } from 'react';
import { Container } from './styles';
import { galeryBackground } from '../../constants';

interface GaleryProps {
	activeStep: number
}

const Galery: FC<GaleryProps> = ({ activeStep }) => (
  <Container isRight={Boolean(activeStep % 2)}>
    <div className="assets">
      <img src={galeryBackground} alt="galery-background" />
    </div>
  </Container>
);

export { Galery };
