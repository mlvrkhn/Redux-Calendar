import styled from 'styled-components';

const StyledMeetingList = styled.li`
    list-style: none;
    margin: 10px 0;
    background: ${({ theme }) => theme.background};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: 20px;
    width: 300px;
    padding: 10px;
`;

export default StyledMeetingList;
