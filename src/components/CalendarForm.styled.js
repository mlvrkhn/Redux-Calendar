import styled from 'styled-components';

const StyledCalendarForm = styled.form`
    width: 300px;
    height: 450px;
    border-radius: 32px;
    margin: 40px;
    border-radius: 20px;
    background: ${({ theme }) => theme.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export default StyledCalendarForm;
