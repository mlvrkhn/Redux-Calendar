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
