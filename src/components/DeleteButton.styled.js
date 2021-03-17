import styled from 'styled-components';

const DeleteButton = styled.button`
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    border: none;
    outline: none;
    margin: 2px;
    float: right;
    justify-content: center;
    align-items: center;
    &:active {
        background-color: hotpink;
    }

    &:before,
    &:after {
        content: '';
        width: 7px;
        height: 1px;
        background-color: ${({ theme }) => theme.color.background};
        position: absolute;
    }

    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
`;

export default DeleteButton;
