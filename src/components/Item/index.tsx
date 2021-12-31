import { FC } from 'react';
import { Container } from './styles';

interface SectionProps {
	title: string,
	text: string,
	number: number
}

const Item: FC<SectionProps> = ({ title, text, number }) => {
  const side = number % 2;

  return (
    <Container side={!!side}>
      <span>
        Step
        {' '}
        {number}
      </span>

      <h2>{title}</h2>
      <p>{text}</p>
    </Container>
  );
};

export { Item };
