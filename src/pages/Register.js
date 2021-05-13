import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Components
import Section from '../components/Section/Section';
import { registerUser } from '../api/register';
import{
    Title,
    Form,
    FormRow,
    CheckboxWrapper,
    InputLabel,
    InputText,
    InputCheckbox,
    InputError,
    ButtonSubmit,
    LoaderWrapper,
    SuccessMessage
} from '../lib/style/generalStyle'

import { colors } from '../lib/style/theme';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [isError, setIsError] = useState(false);
    const [succesMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);
 
    const formik = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            passwordConformation: '',
            isAdmin: false,
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required('First name is required'),
            lastName: Yup.string()
                .required('Last name is required'),
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8,'Password must be at least 8 characters long')
                .required('Password is required'),
            passwordConformation: Yup.string()
                .test(
                    'passwords-match',
                    'Passwords must match',
                    function(value){
                        return this.parent.password === value
                    }
                )
        }),
        onSubmit: (values, { resetForm }) => {
            setIsLoading(true);
            setIsRequestFinished(false);

            const user = {
                email: values.email,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                isAdmin: values.isAdmin
            }
            registerUser(user)
                .then(res =>  {
                    setIsError(false);
                    resetForm({});
                    console.log("err");
                    setSuccessMessage('Success');
                    setTimeout (() => {
                        setIsRequestFinished(true);
                    }, 4000);
                })
                .catch(err => {
                    setIsError(true);
                    console.log("err");
                    setSuccessMessage('Failure');
                })
                .finally(() => {
                    setIsLoading(false);
                    setIsRequestFinished(true);
                });
                setIsLoading(false);
        }
    });    

    return(
        <>
            <Title>Register</Title>
            <Section withoutTopPadding={true}>
            {isRequestFinished &&
                <SuccessMessage isError={isError}>{succesMessage}</SuccessMessage>
            }
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='firstName'>First name</InputLabel>
                            <InputText
                                id='firstName'
                                type='text'
                                {...formik.getFieldProps('firstName')}
                            />
                            {formik.touched.firstName && formik.errors.firstName
                                ? <InputError>{formik.errors.firstName}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='lastName'>Last name</InputLabel>
                            <InputText
                                id='lastName'
                                type='text'
                                {...formik.getFieldProps('lastName')}
                            />
                            {formik.touched.lastName && formik.errors.lastName
                                ? <InputError>{formik.errors.lastName}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='email'>Email</InputLabel>
                            <InputText
                                id='email'
                                type='text'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email
                                ? <InputError>{formik.errors.email}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <InputText
                                id='password'
                                type='password'
                                {...formik.getFieldProps('password')}
                            />
                            {formik.touched.password && formik.errors.password
                                ? <InputError>{formik.errors.password}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='passwordConformation'>Confirm password</InputLabel>
                            <InputText
                                id='passwordConformation'
                                type='password'
                                {...formik.getFieldProps('passwordConformation')}
                            />
                            {formik.touched.passwordConformation && formik.errors.passwordConformation
                                ? <InputError>{formik.errors.passwordConformation}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <CheckboxWrapper>
                                <InputCheckbox
                                    id='isAdmin'
                                    type='checkbox'
                                    {...formik.getFieldProps('isAdmin')}
                                />
                                <InputLabel htmlFor='isAdmin' isCheckbox={true}>Register as Admin</InputLabel>
                            </CheckboxWrapper>
                        </FormRow>
                        <FormRow>
                            <ButtonSubmit type='submit'>Register</ButtonSubmit>
                        </FormRow>
                    </Form>
                    : <LoaderWrapper
                        type="TailSpin"
                        color={colors.yellow}
                        height={100}
                        width={100}
                    />
                }
            </Section>
        </>
    );
}

export default Register;