import { createGlobalStyle } from 'styled-components';
// import PoppinsMedium from '../../fonts/Poppins-Medium.woff';
// import PoppinsRegular from '../../fonts/Poppins-Regular.woff';

import ResetStyle from './Reset';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    * {
        font-family: Input Mono;
    };
    body {
        font-size: 12px;
        background-color: #337DEE;
        color: ${({ theme }) => theme.color.bright};
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.xlarge}
    }
    /* .fade-appear {
        opacity: 0;
        z-index: 1;
    }
    .fade-appear.fade-appear-active {
        opacity: 1;
        transition: opacity 1000ms linear;
    } */
`;
export default GlobalStyle;
