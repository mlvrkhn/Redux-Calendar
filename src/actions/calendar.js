export const loadMeetingsAction = (meetings) => {
    return {
        type: 'LOAD_MEETINGS',
        payload: { meetings },
    };
};
export const saveMeetingAction = (meeting) => {
    return {
        type: 'SAVE_MEETING',
        payload: { meeting },
    };
};
export const switchCard = () => {
    return {
        type: 'SWITCH_CARD',
        payload: { currentCard: 1 },
    };
};
