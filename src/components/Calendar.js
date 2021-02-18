import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';
import MeetingsProvider from './../providers/MeetingsProvider';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

class Calendar extends React.Component {
    meetingsProvider = new MeetingsProvider();

    saveMeeting = (meetingData) => {
        this.meetingsProvider
            .sendMeetingToApi()
            .then((response) => this.props.saveMeeting(response));
    };

    componentDidMount() {
        this.meetingsProvider
            .loadMeetingsFromApi()
            .then((meetings) => this.props.loadMeetings(meetings));
    }

    render() {
        return (
            <section>
                <CalendarList meetings={this.props.meetings} />
                <CalendarForm saveMeeting={this.saveMeeting} />
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        meetings: state.meetings,
    };
};

const mapActionToProps = {
    loadMeetings: loadMeetingsAction,
    saveMeeting: saveMeetingAction,
};

export default connect(mapStateToProps, mapActionToProps)(Calendar);
