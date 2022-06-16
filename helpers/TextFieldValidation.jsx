import React from 'react';
import {useField, ErrorMessage} from "formik";

const TextFieldValidation = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className="form-group required check-required">
            <label htmlFor={field.name}>{label}</label>
            <input
                className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
                {...field}
                {...props}
            />
            <ErrorMessage component='div' name={field.name}/>
        </div>
    );
};

export default TextFieldValidation;