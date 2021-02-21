import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import {
    loadMeetingsAction,
    saveMeetingAction,
    switchPage,
} from '../actions/calendar';
import MeetingsProvider from './../providers/MeetingsProvider';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import GlobalStyle from './styled/Global';
import StyledCalendar from './Calendar.styled';
import { ThemeProvider } from 'styled-components';
import theme from './styled/theme';

class Calendar extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentCard: 0,
    //     };
    // }
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
                    <CalendarForm saveMeeting={this.saveMeeting} />
                    <CalendarList meetings={meetings} />
                    {/* {this.state.currentCard === 0 ? (
                        <CalendarForm saveMeeting={this.saveMeeting} />
                    ) : (
                        <CalendarList meetings={meetings} />
                    )} */}
                </StyledCalendar>
            </ThemeProvider>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
        currentCard: state.currentCard,
    };
};

const mapActionToProps = {
    loadMeetingsAction,
    saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
