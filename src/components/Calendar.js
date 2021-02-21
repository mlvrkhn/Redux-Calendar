import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {
    loadMeetingsAction,
    saveMeetingAction,
    switchPage,
} from '../actions/calendar';
import MeetingsProvider from './../providers/MeetingsProvider';
import { Transition } from 'react-transition-group';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import GlobalStyle from './styled/Global';
import StyledCalendar from './Calendar.styled';
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
        const { meetings, flip, inProp } = this.props;

        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <StyledCalendar>
                    {flip === false ? (
                        <CalendarForm saveMeeting={this.saveMeeting} />
                    ) : (
                        <CalendarList meetings={meetings} />
                    )}
                </StyledCalendar>
            </ThemeProvider>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
        flip: state.flip,
        inProp: state.inProp,
    };
};

const mapActionToProps = {
    loadMeetingsAction,
    saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
