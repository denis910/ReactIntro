import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { loginUser } from '../api/login';
import { getAllUsers } from '../api/user';

//Components
import Section from '../components/Section/Section';
import{
    Title,
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    ButtonSubmit,
    LoaderWrapper,
    SuccessMessage
} from '../lib/style/generalStyle'

import { colors } from '../lib/style/theme';

const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [succesMessage, setSuccessMessage] = useState('');
    const [isRequestFinished, setIsRequestFinished] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Email is required'),
            password: Yup.string()
                .min(8,'Password must be at least 8 characters long')
                .required('Password is required'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setIsLoading(true);
            setIsRequestFinished(false);
            setIsError(false);

            try{
                const response = await loginUser(values);
                const users = await getAllUsers(response.token);
                const isAdmin = users.find(user => user.email === values.email).isAdmin;

                localStorage.setItem('authToken',response.token);
                localStorage.setItem('isAdmin',isAdmin);


                setTimeout (() => {
                    setIsRequestFinished(true);
                }, 4000);
                setSuccessMessage('');
                resetForm({});
            } catch (err){
                setIsError(true);
                setSuccessMessage('');
            } finally {
                setIsRequestFinished(true);
                setIsLoading(false);
            }
        }
    });

    return(
        <>
            <Title>Login</Title>
            <Section withoutTopPadding={true}>
                {isRequestFinished &&
                    <SuccessMessage isError={isError}>{succesMessage}</SuccessMessage>
                }
                {!isLoading
                    ? <Form onSubmit={formik.handleSubmit}>
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
                            <ButtonSubmit type='submit'>Login</ButtonSubmit>
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

export default Login;