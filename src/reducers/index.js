const initialState = {
    meetings: [],
    flip: false,
    inProp: true,
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
        default:
            return state;
    }
};

export default reducer;
