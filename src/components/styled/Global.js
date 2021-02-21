import { createGlobalStyle } from 'styled-components';
import PoppinsMedium from '../../fonts/Poppins-Medium.woff';
import PoppinsRegular from '../../fonts/Poppins-Regular.woff';

import ResetStyle from './Reset';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    @font-face {
        font-family: 'Poppins';
        src: url(${PoppinsRegular}) format('woff'), url(${PoppinsMedium}) format('woff');
    };
    * {
        font-family: Poppins;
    };
    body {
        font-size: 12px;
        background-color: #337DEE;
        color: ${({ theme }) => theme.color.bright};
    }
    h2 {
        font-size: ${({ theme }) => theme.fontSize.xlarge}
    }
`;
export default GlobalStyle;
