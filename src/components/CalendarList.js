import React from 'react';
import StyledCalendarList from './CalendarList.styled';
import StyledMeetingList from './Meeting.styled';
import StyledHeader from './Header.styled';

class CalendarList extends React.Component {
    renderMeetingsList() {
        return this.props.meetings.map((item) => this.renderMeetingsItem(item));
    }

    renderMeetingsItem(itemData) {
        return (
            <StyledMeetingList key={itemData.id}>
                {itemData.date} {itemData.time} =>{' '}
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
            </StyledMeetingList>
        );
    }

    render() {
        return (
            <StyledCalendarList>
                <StyledHeader>Your meetings</StyledHeader>
                {this.renderMeetingsList()}
            </StyledCalendarList>
        );
    }
}

export default CalendarList;
