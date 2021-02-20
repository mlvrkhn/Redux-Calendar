import { createGlobalStyle } from 'styled-components';

import ResetStyle from './Reset';

const GlobalStyle = createGlobalStyle`
    ${ResetStyle};
    body {
        background-color: #5e61b5;
    }
`;
export default GlobalStyle;
