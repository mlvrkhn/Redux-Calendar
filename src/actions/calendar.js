export const loadMeetingsAction = (meetings) => {
    console.log('loading');
    return {
        type: 'LOAD_MEETINGS',
        payload: { meetings },
    };
};
export const saveMeetingAction = (meeting) => {
    console.log('saving');
    return {
        type: 'SAVE_MEETING',
        payload: { meeting },
    };
};
