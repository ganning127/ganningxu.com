import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import theme from '../theme';
import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/react';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import MDXComponents from '../components/MDXComponents';

const GlobalStyle = ({ children }) => {
  let { colorMode } = useColorMode();

  let scrollbarStyles = ``;

  if (colorMode === 'dark') {
    scrollbarStyles = `
      
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: black;
      }
      
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #262729;
        border-radius: 10px;
      }
    `;
  }
  return (
    <>
      <Global
        styles={css`
           ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          html {
            min-width: 356px;
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#15161a'};
          }

          ${scrollbarStyles}

          
        `}
      />
      {children}
    </>
  );
};


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <GlobalStyle>
          <DefaultSeo {...SEO} />

          <Component {...pageProps} />

        </GlobalStyle>
      </MDXProvider>
    </ChakraProvider >
  );
}
export default MyApp;