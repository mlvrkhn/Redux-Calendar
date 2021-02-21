import styled from 'styled-components';

const StyledInput = styled.input`
    outline: none;
    width: 200px;
    border: none;
    color: white;
    font-size: ${({ theme }) => theme.fontSize.medium};
    background: ${({ theme }) => theme.color.background};
    border-bottom: 1px solid;
    border-color: lightgray;
    padding: 0.1rem 0.5rem;
    margin: 5px 0;
    &::placeholder {
        color: ${({ theme }) => theme.color.bright};
    }
    &:focus {
        background: ${({ theme }) => theme.color.background};
    }
`;

export default StyledInput;
