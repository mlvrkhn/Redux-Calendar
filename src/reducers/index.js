const initialState = {
    meetings: [
        {
            id: 1,
            firstName: 'Jan',
            lastName: 'Kowalski',
            email: 'jan@kowalski.not',
            date: '2022-01-01',
            time: '10:00',
        },
    ],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
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
