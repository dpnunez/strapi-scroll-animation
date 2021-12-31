import { motion } from 'framer-motion';
import styled from 'styled-components';

const Container = styled(motion.div)`
	width: 50%;
	position: sticky;
	height: 100vh;
	margin-top: -100vh;
	top: 0;
	display: flex;
	align-items: center;
	perspective: 1800px;

	img {
		width: 110%;
	}
`;

export { Container };
