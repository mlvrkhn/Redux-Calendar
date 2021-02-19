import React from 'react';
import validateForm from '../validation/Validator';
import fields from '../formFields';

class CalendarForm extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        date: '',
        time: '',
        errors: [],
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateForm(this.state);
        this.setState({
            errors,
        });

        if (errors.length === 0) {
            this.saveMeeting();
            this.clearFormFields();
        }
    };

    handleFieldChange = (e) => {
        if (this.isFieldNameCorrect(e.target.name)) {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    saveMeeting() {
        const { saveMeeting } = this.props;

        if (typeof saveMeeting === 'function') {
            saveMeeting(this._getFieldsData());
        }
    }

    clearFormFields() {
        const fieldsData = this._getFieldsData();
        for (const prop in fieldsData) {
            fieldsData[prop] = '';
        }

        this.setState(fieldsData);
    }

    isFieldNameCorrect(name) {
        const fieldsData = this._getFieldsData();
        return typeof fieldsData[name] !== 'undefined';
    }

    renderFormFields() {
        return fields.map((field) => {
            const { name, placeholder, label } = field;
            return (
                <div key={name}>
                    <label>
                        {field.label}:{' '}
                        <input
                            name={name}
                            onChange={this.handleFieldChange}
                            value={this.state.time}
                            placeholder={placeholder}
                            value={this.state[name]}
                        />
                    </label>
                </div>
            );
        });
    }

    renderErrors() {
        return this.state.errors.map((err, index) => (
            <li key={index}>{err}</li>
        ));
    }

    _getFieldsData() {
        const fieldsData = Object.assign({}, this.state);
        delete fieldsData['errors'];

        return fieldsData;
    }

    render() {
        return (
            <form action='' onSubmit={this.handleSubmit}>
                <ul>{this.renderErrors()}</ul>
                {this.renderFormFields()}
                <div>
                    <input type='submit' value='zapisz' />
                </div>
            </form>
        );
    }
}

export default CalendarForm;
