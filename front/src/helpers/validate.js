export const validateRegister = (formData) => {
    const errors = {}
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (formData.email && !emailRegex.test(formData.email)) {
        errors.email = "Email invalido"
    } 
    //añadir mas else if porque no¿?
    return errors;
}

export const validateLogin = (formData) => {
    const errors = {}

    if (!formData.username) {
        errors.username = "El campo es obligatorio"
    } 
    //añadir mas else if porque no¿?
    return errors;
}