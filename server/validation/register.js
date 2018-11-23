const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    data.name = !isEmpty(data.name) ? data.name : "";
    data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
    data.addr = !isEmpty(data.addr) ? data.addr : "";
    data.tel = !isEmpty(data.tel) ? data.tel : "";
    data.country = !isEmpty(data.country) ? data.country : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password_confirm = !isEmpty(data.password_confirm) ? data.password_confirm : "";
    
    if(Validator.isEmpty(data.fullname)) {
        errors.name = "FullName field is required";
    }
    if(Validator.isEmpty(data.tel)) {
        errors.name = "Tel field is required";
    }
    if(!Validator.isLength(data.tel, { min: 8 })) {
        errors.name = "Tel must have at least 8 chars";
    }
    if(Validator.isEmpty(data.country)) {
        errors.country = "Country field is required";
    }

    if(!Validator.isLength(data.name, { min: 2, max: 30 })) {
        errors.name = "Name must be between 2 to 30 chars";
    }
    
    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if(!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = "Password must have 6 chars";
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }

    if(!Validator.isLength(data.password_confirm, {min: 6, max: 30})) {
        errors.password_confirm = "Password must have 6 chars";
    }

    if(!Validator.equals(data.password, data.password_confirm)) {
        errors.password_confirm = "Password and Confirm Password must match";
    }

    if(Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = "Password is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}