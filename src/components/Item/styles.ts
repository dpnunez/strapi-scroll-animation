import styled, { css } from 'styled-components';

interface ContainerProps {
	side: boolean
}

export const Container = styled.section<ContainerProps>`
	width: 45%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ side }) => (side ? css`margin-left: auto` : css`margin-right: auto`)};

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
