export const defaultStyle = {
    transition: `transform 1000ms, opacity 500ms ease`,
    opacity: 1,
};

export const transitionStyles = {
    entering: { transform: 'rotateY(180deg)', opacity: 0 },
    entered: { transform: 'scale(1.0)', opacity: 1 },
    exiting: { transform: 'rotateY(180deg)', opacity: 0 },
    exited: { opacity: 0 },
};
