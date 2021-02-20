import styled from 'styled-components';

const StyledCalendarList = styled.div`
    width: 300px;
    height: 450px;
    border-radius: 20px;
    background: #5e61b5;
    box-shadow: ${({ theme }) => theme.boxShadow};
`;

export default StyledCalendarList;
