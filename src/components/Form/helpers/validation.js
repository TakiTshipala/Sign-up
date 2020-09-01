export const isValidatedForm = (state) => {
    const { email, 
        fullname,
        surname, 
        password,
      } = state
    return (
    isEmail(email) && 
    username.isValidated(fullname) && 
    isSurnameValidated(surname) && 
    isPassword(password) &&
    isPasswordUpper(password) &&
    isPasswordLower(password) &&
    isPasswordDigit(password) &&
    isPasswordSpecialChar (password)
    );
};

export const isSurnameValidated = (surname) => {
    return surname && surname !== " ";
}

export const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const username = {
    isValidated: (name) => {
        return !username.isShort(name) && !username.hasDigit(name)
    },
    isShort: (name) => {
        return name.length < 1
    },
    hasDigit: (username) => {
        const re = /\d/;
        return re.test(username.toLowerCase());
    }
}

export const surname = {
    isValidated: (name) => {
        return !surname.isShort(name) && !surname.hasDigit(name)
    },
    isShort: (name) => {
        return name.length < 1
    },
    hasDigit: (surname) => {
        const re = /\d/;
        return re.test(surname.toLowerCase());
    }
}

export const isPassword = (password) => {
    return password.length >= 8
}

export const isPasswordUpper = (uppercase) => {
    return uppercase.match(/[A-Z]/g)
}

export const isPasswordLower = (lowercase) => {
    return lowercase.match(/[a-z]/g)
}

export const isPasswordDigit = (digit) => {
    return digit.match(/[0-9]/g)
}

export const isPasswordSpecialChar = (chars) => {
    return chars.match(/[\s~`!@#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?()\._]/g)
}

export const isEmpty = (text) => {
    return text.length === 0
}