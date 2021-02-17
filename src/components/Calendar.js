import React from 'react';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { loadMeetingsAction, saveMeetingAction } from '../actions/calendar';
import MeetingsProvider from './../providers/MeetingsProvider';

import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';

class Calendar extends React.Component {
    meetingsProvider = new MeetingsProvider();

    loadMeetingsFromApi() {
        fetch(this.apiUrl)
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error('Network error!');
            })
            .then((resp) => {
                this.props.loadMeetings(resp);
            })
            .catch((err) => {
                console.error(err);
            });
    }

    sendMeetingToApi = (meetingData) => {
        fetch(this.apiUrl, {
            method: 'POST',
            body: JSON.stringify(meetingData),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }

                throw new Error('Network error!');
            })
            .then((meetingData) => {
                this.props.saveMeeting(meetingData);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    componentDidMount() {
        console.log(this.meetingsProvider);
        // meetingsProvider.loadMeetingsFromApi();
    }

    render() {
        return (
            <section>
                <CalendarList meetings={this.props.meetings} />
                <CalendarForm saveMeeting={this.sendMeetingToApi} />
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
