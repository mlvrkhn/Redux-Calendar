import ValidatorFunctions from './ValidatorFunctions';

const validateForm = ({ firstName, lastName, email, date, time }) => {
    const validator = new ValidatorFunctions();
    const errors = [];

    if (!validator.isFirstNameCorrect(firstName)) {
        errors.push('Enter first name');
    }

    if (!validator.isLastNameCorrect(lastName)) {
        errors.push('Enter last name');
    }

    if (!validator.isDateCorrect(date)) {
        errors.push('Correct entered date');
    }

    if (!validator.isTimeCorrect(time)) {
        errors.push('Correct entered time');
    }

    if (!validator.isEmailCorrect(email)) {
        errors.push('Correct provided email address');
    }

    return errors;
};

export default validateForm;
