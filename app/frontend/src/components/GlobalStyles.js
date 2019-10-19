import { createGlobalStyle } from 'styled-components';
import Rubik from '../assets/fonts/Rubik/Rubik-Black.ttf';


const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Rubik', sans-serif;
      src: url(${Rubik}) format("opentype");
      font-weight: normal;
      font-style: normal;
    }
    html, body, #root {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        flex: 1;
        font-family: 'Rubik', sans-serif;
    }
`;

export default GlobalStyle;
