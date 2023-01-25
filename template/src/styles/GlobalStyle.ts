import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    html {
        font-size: 10px;
    }

    body{
        margin: 0;
        font-size: 12px;
    }

    button{
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
