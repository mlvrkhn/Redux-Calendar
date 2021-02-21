import styled from 'styled-components';

const Button = styled.button`
    padding: 8px;
    display: block;
    margin: 20px 5px;
    border: none;
    background-color: inherit;
    border-radius: 8px;
    height: 40px;
    width: 140px;
    color: white;
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default Button;
