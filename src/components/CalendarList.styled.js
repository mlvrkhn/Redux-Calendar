import styled from 'styled-components';

const StyledCalendarList = styled.div`
    width: 300px;
    height: 450px;
    border-radius: 20px;
    background: ${({ theme }) => theme.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    padding: 50px;
`;

export default StyledCalendarList;
