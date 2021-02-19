class ValidatorFunctions {
    isDateCorrect = (date) => {
        const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/;
        return pattern.test(date);
    };

    isTimeCorrect = (time) => {
        const pattern = /^[0-9]{2}:[0-9]{2}$/;
        return pattern.test(time);
    };

    isFirstNameCorrect = (firstName) => {
        return firstName.length > 0;
    };

    isLastNameCorrect = (lastName) => {
        return lastName.length > 0;
    };

    isEmailCorrect = (email) => {
        const pattern = /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/;
        return pattern.test(email);
    };
}

export default ValidatorFunctions;
