const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateLoginInput(data) {
    let errors = {};
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password  = !isEmpty(data.password) ? data.password : '';

    if(!Validator.isEmail(data.email)) {
        errors.emailLogin = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) {
        errors.emailLogin = 'Email is required';
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.passwordLogin = 'Password must have 6 chars';
    }

    if(Validator.isEmpty(data.password)) {
        errors.passwordLogin = 'Password is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}