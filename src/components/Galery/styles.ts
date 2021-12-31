import styled from 'styled-components';

interface GaleryContainer {
	isRight: boolean
}

const Container = styled.div<GaleryContainer>`
	width: 50%;
	position: sticky;
	height: 100vh;
	margin-top: -100vh;
	top: 0;
	display: flex;
	align-items: center;
	perspective: 1800px;
	transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
	transform: translateX(${({ isRight }) => (isRight ? '100%' : 0)}) rotateY(-10deg) rotateX(0deg);
	
	.assets {
		transition: all 600ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
		transform: rotateY(${({ isRight }) => (isRight ? '-15deg' : '15deg')}) rotateX(10deg);
	}

	img {
		width: 110%;
	}
`;

export { Container };
