import styled, { css } from 'styled-components';

interface ContentProps {
	side: 'left' | 'right'
}

interface ContainerProps extends ContentProps {
	orientation: boolean
}

export const Container = styled.div<ContainerProps>`
	width: 100%;
	position: relative;
	.triangle {
		position: absolute;
		z-index: -1;
		width: 40%;
		top: 0;
		${({ side }) => (side === 'right' ? css`left: 0` : css`right: 0`)};
		${({ orientation }) => orientation && css`
			display: flex;
			flex-direction: column-reverse;
		`}

		.triangle-img {
			${({ orientation }) => orientation && css`transform: rotate(180deg)`}
		}
		
		.dots {
			width: 100px;
		}
	}
`;

export const Content = styled.section<ContentProps>`
	width: 45%;
	height: 110vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ side }) => (side === 'right' ? css`margin-left: auto` : css`margin-right: auto`)};
	position: relative;

	h2 {
		margin: 2rem 0;
		color: #1d1b84;
		font-size: 2rem;
	}

	span {
		font-weight: 600;
		font-size: 1.1rem;
		margin: 0;
		color: #dac46f;
	}

	p {
		font-size: 1.2rem;
		line-height: 2rem;
		margin: 0;
		color: #344b80;
		font-weight: 500;
	}

	
`;
