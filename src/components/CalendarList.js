import React from 'react';
import { useDispatch } from 'react-redux';
import StyledCalendarList from './CalendarList.styled';
import StyledMeetingList from './Meeting.styled';
import StyledHeader from './Header.styled';
import StyledButton from './Button.styled';

const CalendarList = (props) => {
    const dispatch = useDispatch();
    const renderMeetingsItem = (itemData) => {
        return (
            <StyledMeetingList key={itemData.id}>
                {itemData.date} {itemData.time} =>{' '}
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
            </StyledMeetingList>
        );
    };
    const renderMeetingsList = () => {
        return props.meetings.map((item) => renderMeetingsItem(item));
    };

    return (
        <StyledCalendarList>
            <StyledHeader>Your meetings</StyledHeader>
            {renderMeetingsList()}
            <StyledButton
                type='button'
                onClick={() =>
                    dispatch({
                        type: 'SWITCH_CARD',
                        payload: false,
                    })
                }
            >
                Back
            </StyledButton>
        </StyledCalendarList>
    );
};

export default CalendarList;
