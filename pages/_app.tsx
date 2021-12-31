import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		overflow-x: hidden;
	}
`;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
    ;
  </>
);

export default MyApp;
