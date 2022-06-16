import React, {useState, useMemo, useEffect} from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {filterId} from "../../../../pages";
import {Formik, Form} from "formik";
import TextFieldValidation from "../../../../helpers/TextFieldValidation";
import *  as Yup from 'yup'
import "yup-phone";


const Information = ({data}) => {

    const validate = Yup.object({
        billing_name: Yup.string()
            .trim()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
            .min(2, 'Too Short!')
            .max(40, 'Must be 40 characters')
            .required('required'),
        billing_lastname: Yup.string()
            .trim()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
            .min(2, 'Too Short!')
            .max(40, 'Must be 40 characters')
            .required('required'),
        billing_street_address: Yup.string()
            .trim()
            .required('required')
            .min(2, 'Too Short!')
            .max(80, 'Must be 80 characters'),
        billing_city: Yup.string()
            .trim()
            .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field")
            .min(2, 'Too Short!')
            .max(80, 'Must be 80 characters')
            .required('required'),
        billing_zipcode: Yup.string()
            .trim()
            .matches(/^\d{5}(-\d{4})?$/, "Please enter the correct zip code")
            .required('required'),
        billing_phone: Yup.string()
            .trim()
            .matches(/^[\d ()+-]+$/, 'The field should have digits only')
            .phone('AM', true, 'Phone number is invalid')
            .required('required'),
        billing_email: Yup.string()
            .email("email is invalid")
            .required('required')

    })

    const [value, setValue] = useState('')

    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = value => {
        setValue(value)
    }

    useEffect(() => {
        options.map(el => {
            if (el.value === data.ip.countrycode) {
                setValue(el)
            }
        })
    }, [])


    return (
        <Formik
            initialValues={{
                billing_name: "",
                billing_lastname: "",
                billing_street_address: "",
                billing_city: "",
                billing_zipcode: "",
                billing_phone: "",
                billing_email: ""

            }}
            validationSchema={validate}
            onSubmit={values => {
                console.log(values)
            }}
        >
            {
                formik => (
                    <div className="information-area">
                        <div className="information-complete-area">
                            {/*{console.log(formik.values)}*/}
                            <Form>
                                <TextFieldValidation label="First Name" name="billing_name" type="text"
                                                     placeholder="Name"/>
                                <TextFieldValidation label="Last Name" name="billing_lastname" type="text"
                                                     placeholder="Name"/>
                                <TextFieldValidation label="Last Name" name="billing_lastname" type="text"
                                                     placeholder="Name"/>
                                <div className="form-group">
                                    <label>Company name(optional)</label>
                                    <input name="billing_company" className="form-control" placeholder="Full name"/>
                                </div>

                                <div className="form-group required check-required"
                                     data-select2-id="select2-data-5-fj2e">
                                    <label>Country/Region</label>
                                    <Select options={data.countries} instanceId
                                            value={value} onChange={changeHandler}/>
                                </div>
                                <TextFieldValidation label="Street address" name="billing_street_address" type="text"
                                                     placeholder="House number and street name"/>
                                <div className="form-group">
                                    <input name="billing_apartment" className="form-control"
                                           placeholder="Apartment, suite, unit, etc. (optional)"/>
                                </div>
                                <TextFieldValidation label="Town/City" name="billing_city" type="text" placeholder=""/>
                                <div className="form-group">
                                    <label>Country (optional)</label>
                                    <input name="billing_state" className="form-control" placeholder=""/>
                                </div>
                                <TextFieldValidation label="Postcode" name="billing_zipcode" type="text"
                                                     placeholder=""/>
                                <TextFieldValidation label="Phone" name="billing_phone" type="text"
                                                     placeholder=""/>
                                <TextFieldValidation label="Email address" name="billing_email" type="email"/>
                                <p>ADD</p>
                            </Form>

                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>First Name</label>*/}
                            {/*    <input name="billing_name" className="form-control" placeholder="Name"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Last Name</label>*/}
                            {/*    <input name="billing_lastname" className="form-control" placeholder="Name"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    <label>Company name(optional)</label>*/}
                            {/*    <input name="billing_company" className="form-control" placeholder="Full name"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required" data-select2-id="select2-data-5-fj2e">*/}
                            {/*    <label>Country/Region</label>*/}
                            {/*    <select className="form-control select2 select2-hidden-accessible"*/}
                            {/*            name="billing_country_id"*/}
                            {/*            data-select2-id="select2-data-1-w7qx" tabIndex="-1" aria-hidden="true">*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Street address</label>*/}
                            {/*    <input name="billing_street_address" className="form-control"*/}
                            {/*           placeholder="House number and street name"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    <input name="billing_apartment" className="form-control"*/}
                            {/*           placeholder="Apartment, suite, unit, etc. (optional)"/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Town/City</label>*/}
                            {/*    <input name="billing_city" className="form-control" placeholder=""/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group">*/}
                            {/*    <label>Country (optional)</label>*/}
                            {/*    <input name="billing_state" className="form-control" placeholder=""/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Postcode</label>*/}
                            {/*    <input name="billing_zipcode" className="form-control" placeholder=""/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Phone</label>*/}
                            {/*    <input name="billing_phone" className="form-control" placeholder=""/>*/}
                            {/*</div>*/}
                            {/*<div className="form-group required check-required">*/}
                            {/*    <label>Email address</label>*/}
                            {/*    <input name="billing_email" className="form-control" placeholder=""/>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                )
            }

        </Formik>
    );
};

export default Information;