import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import validateForm from '../validation/Validator';
import fields from '../formFields';
import {
    defaultStyle,
    transitionStyles,
} from '../components/styled/transition';

import StyledCalendarForm from './CalendarForm.styled';
import StyledInput from './Input.styled';
import StyledButton from './Button.styled';
import StyledHeader from './Header.styled';
import StyledButtonGroup from './ButtonGroup.styled';

import { Transition } from 'react-transition-group';

const CalendarForm = (props) => {
    const initState = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        errors: [],
    };

    const [state, setState] = useState(initState);
    const [entered, setEntered] = useState(true);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(state);
        setState({ ...state, errors });

        if (errors.length === 0) {
            saveMeeting();
            clearFormFields();
        }
    };

    const handleFieldChange = (e) => {
        if (isFieldNameCorrect(e.target.name)) {
            setState({ ...state, [e.target.name]: e.target.value });
        }
    };

    const saveMeeting = () => {
        const { saveMeeting } = props;

        if (typeof saveMeeting === 'function') {
            saveMeeting(_getFieldsData());
        }
    };

    const clearFormFields = () => {
        const fieldsData = _getFieldsData();
        for (const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        setState(fieldsData);
    };

    const isFieldNameCorrect = (name) => {
        const fieldsData = _getFieldsData();
        return typeof fieldsData[name] !== 'undefined';
    };

    const renderFormFields = () => {
        return fields.map((field) => {
            const { name, placeholder, label } = field;
            return (
                <div key={name}>
                    <label>
                        <StyledInput
                            name={name}
                            onChange={handleFieldChange}
                            value={state.time}
                            placeholder={placeholder}
                            value={state[name]}
                        />
                    </label>
                </div>
            );
        });
    };

    const renderErrors = () => {
        return state.errors.map((err, index) => <li key={index}>{err}</li>);
    };

    const _getFieldsData = () => {
        const fieldsData = Object.assign({}, state);
        delete fieldsData['errors'];

        return fieldsData;
    };

    return (
        <Transition in={entered} timeout={0} appear>
            {(currState) => (
                <StyledCalendarForm
                    action=''
                    onSubmit={handleSubmit}
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[currState],
                    }}
                >
                    <StyledHeader>Add meeting</StyledHeader>
                    {renderFormFields()}
                    <ul>{renderErrors()}</ul>
                    <div>
                        <StyledButton type='submit' value='zapisz'>
                            Save
                        </StyledButton>
                        <StyledButton
                            type='button'
                            onClick={() => {
                                setEntered(!entered);
                                dispatch({
                                    type: 'SWITCH_CARD',
                                    payload: true,
                                });
                            }}
                            value='zapisz'
                        >
                            See meetings
                        </StyledButton>
                    </div>
                </StyledCalendarForm>
            )}
        </Transition>
    );
};

export default CalendarForm;
