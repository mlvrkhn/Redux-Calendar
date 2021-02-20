import { createGlobalStyle } from 'styled-components';
// import PoppinsMedium from '../../fonts/Poppins-Medium.woff';
// import PoppinsRegular from '../../fonts/Poppins-Regular.woff';

import ResetStyle from './Reset';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    body {
        font-family: Input Mono;
        font-size: 12px;
        background-color: #337DEE;
        color: ${({ theme }) => theme.color.bright};
    }
`;
export default GlobalStyle;
