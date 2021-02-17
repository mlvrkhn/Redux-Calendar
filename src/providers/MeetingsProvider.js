class MeetingsProvider {
    apiUrl = 'http://localhost:3005/meetings';

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
}

export default MeetingsProvider;
