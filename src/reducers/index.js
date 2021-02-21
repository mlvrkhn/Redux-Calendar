const initialState = {
    meetings: [],
    flip: true,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SWITCH_CARD':
            return {
                ...state,
                flip: payload,
            };
        case 'LOAD_MEETINGS':
            return {
                ...state,
                meetings: payload.meetings,
            };
        case 'SAVE_MEETING':
            return {
                ...state,
                meetings: [...state.meetings, payload.meeting],
            };
        case 'DELETE_MEETING':
            return {
                ...state,
                meetings: state.meetings.filter(
                    (meeting) => meeting.id !== payload
                ),
            };
        default:
            return state;
    }
};

export default reducer;
