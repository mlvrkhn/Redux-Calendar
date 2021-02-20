import React from 'react';
import StyledCalendarList from './CalendarList.styled';

class CalendarList extends React.Component {
    render() {
        return (
            <StyledCalendarList>{this.renderMeetingsList()}</StyledCalendarList>
        );
    }

    renderMeetingsList() {
        return this.props.meetings.map((item) => this.renderMeetingsItem(item));
    }

    renderMeetingsItem(itemData) {
        return (
            <li key={itemData.id}>
                {itemData.date} {itemData.time} =>
                <a href={`mailto: ${itemData.email}`}>
                    {itemData.firstName} {itemData.lastName}
                </a>
            </li>
        );
    }
}

export default CalendarList;
