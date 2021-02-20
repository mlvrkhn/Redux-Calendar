import React, { useState } from 'react';
import validateForm from '../validation/Validator';
import fields from '../formFields';

import StyledCalendarForm from './CalendarForm.styled';
import StyledInput from './Input.styled';

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
        console.log('🚀 ~ saveMeeting ~ saveMeeting', saveMeeting);

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
        <StyledCalendarForm action='' onSubmit={handleSubmit}>
            {/* <ul>{renderErrors()}</ul> */}
            <h2>Add meeting</h2>
            {renderFormFields()}
            <div>
                <input type='submit' value='zapisz' />
            </div>
        </StyledCalendarForm>
    );
};

export default CalendarForm;
