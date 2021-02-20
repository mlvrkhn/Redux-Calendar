import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';
import MeetingsProvider from './../providers/MeetingsProvider';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import GlobalStyle from './styled/Global';
import StyledCalendar from './Calendar.styled';
import StyledCalendarList from './CalendarList.styled';
import StyledCalendarForm from './CalendarForm.styled';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';

class Calendar extends React.Component {
    meetingsProvider = new MeetingsProvider();

    saveMeeting = (meetingData) => {
        this.meetingsProvider
            .sendMeetingToApi(meetingData)
            .then((response) => this.props.saveMeetingAction(response));
    };

    componentDidMount() {
        this.meetingsProvider
            .loadMeetingsFromApi()
            .then((meetings) => this.props.loadMeetingsAction(meetings));
    }

    render() {
        const { meetings } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledCalendar>
                    <StyledCalendarList meetings={meetings} />
                    <StyledCalendarForm saveMeeting={this.saveMeeting} />
                </StyledCalendar>
            </ThemeProvider>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
    };
};

const mapActionToProps = {
    loadMeetingsAction,
    saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
