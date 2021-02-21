const initialState = {
    meetings: [],
    currentCard: 0,
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SWITCH_CARD':
            return {
                ...state,
                currentCard: 1,
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
