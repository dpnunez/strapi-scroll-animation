import { FC, useMemo } from 'react';
import { Content, Container } from './styles';

interface SectionProps {
	title: string,
	text: string,
	number: number,
	itemRef?: any
}

const Item: FC<SectionProps> = ({
  title, text, number, itemRef,
}) => {
  const orientation = useMemo(() => Math.random() < 0.5, []);
  const hasDoot = useMemo(() => Math.random() < 0.5, []);

  const side = number % 2 ? 'right' : 'left';

  return (
    <Container side={side} orientation={orientation}>
      <div className="triangle">
        <img className="triangle-img" src="https://strapi.io/assets/decoration/triangle.svg" alt="triangle" />
        {hasDoot && (
        <img className="dots" src="https://strapi.io/assets/decoration/dots.svg" alt="dots" />
        )}
      </div>
      <Content side={side} ref={itemRef}>
        <span>
          Step
          {' '}
          {number}
        </span>

        <h2>{title}</h2>
        <p>{text}</p>
      </Content>
    </Container>
  );
};

export { Item };
