import styled from 'styled-components';

const StyledCalendarForm = styled.form`
    width: 300px;
    height: 450px;
    border-radius: 32px;
    margin: 40px;
    border-radius: 20px;
    background: #5e61b5;
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default StyledCalendarForm;
