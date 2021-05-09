import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

//Components
import { 
    ModalForm,
    ModalContainer,
    Title } from './ModalStyle';
import{
    Form,
    FormRow,
    InputLabel,
    InputText,
    InputError,
    ButtonSubmit,
    TextArea,
    Select,
    Option,
    Grid,
    ButtonExit
} from '../../lib/style/generalStyle';

const categoryOptions = [
    { value: 'null', label: 'Select...' },
    { value: '#marketing', label: '#marketing' },
    { value: '#design', label: '#design' },
    { value: '#frontend', label: '#frontend' },
    { value: '#backend', label: '#backend' },
];

const firmOptions = [
    { value: 'null', label: 'Select...' },
    { value: 'Speck', label: 'Speck' },
    { value: 'Five', label: 'Five' },
    { value: 'Bornfight', label: 'Bornfight' },
    { value: 'Agency 04', label: 'Agency 04' },
];


const Modal = (props) => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            category: 'null',
            date: '',
            timeFrom: '',
            timeTo: '',
            capacity:'',
            firm:'null'
        },
        validationSchema: Yup.object({
            title: Yup.string()
                .required('Title is required'),
            description: Yup.string()
                .required('Description is required'),
            category: Yup.string()
                .test('value not null', '', function(value){
                    if(value === 'null')
                        return this.createError({message: 'Category is required'})
                    return true
                }),
            date: Yup.string()
                .required('Date is required'),
            timeFrom: Yup.string()
                .required('Time from is required'),
            timeTo: Yup.string()
                .required('Time to is required'),
            capacity: Yup.string()
                .required('Capacity is required')
                .matches(/^\d+$/, 'Capacity must be a number'),
            firm: Yup.string()
                .test('value not null', '', function(value){
                    if(value === 'null')
                        return this.createError({message: 'Firm is required'})
                    return true
                }),
        }),
        onSubmit: () => {
            props.setForm();
            props.gatherInformation(formik.values.title, formik.values.description, 
                formik.values.category, formik.values.date, formik.values.timeFrom, 
                formik.values.timeTo, formik.values.capacity, formik.values.firm);
        }
    });

    return(
        <>
            <ModalContainer onClick={props.setForm}></ModalContainer>
                <ModalForm>
                <ButtonExit onClick={props.setForm}>X</ButtonExit>
                <Title>Add Event</Title>
                    <Form onSubmit={formik.handleSubmit}>
                        <FormRow>
                            <InputLabel htmlFor='title'>Title</InputLabel>
                            <InputText
                                id='title'
                                type='text'
                                {...formik.getFieldProps('title')}
                            />
                            {formik.touched.title && formik.errors.title
                                ? <InputError>{formik.errors.title}</InputError>
                                :null
                            }
                        </FormRow>
                        <FormRow>
                            <InputLabel htmlFor='description'>Description</InputLabel>
                            <TextArea
                                id='description'
                                {...formik.getFieldProps('description')}
                            />
                            {formik.touched.description && formik.errors.description
                                ? <InputError>{formik.errors.description}</InputError>
                                :null
                            }
                        </FormRow>
                        <Grid columns={2}>
                            <FormRow>
                                <InputLabel htmlFor='category'>Category</InputLabel>
                                <Select id='category' {...formik.getFieldProps('category')}>
                                    {categoryOptions.map(option =>
                                        <Option value={option.value}>{option.label}</Option>
                                    )}
                                </Select>
                                {formik.touched.category && formik.errors.category
                                    ? <InputError>{formik.errors.category}</InputError>
                                    :null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='date'>Date</InputLabel>
                                <InputText
                                    id='date'
                                    {...formik.getFieldProps('date')}
                                />
                                {formik.touched.date && formik.errors.date
                                    ? <InputError>{formik.errors.date}</InputError>
                                    :null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='timeFrom'>Time from</InputLabel>
                                <InputText
                                    id='timeFrom'
                                    {...formik.getFieldProps('timeFrom')}
                                />
                                {formik.touched.timeFrom && formik.errors.timeFrom
                                    ? <InputError>{formik.errors.timeFrom}</InputError>
                                    :null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='timeTo'>Time to</InputLabel>
                                <InputText
                                    id='timeTo'
                                    {...formik.getFieldProps('timeTo')}
                                />
                                {formik.touched.timeTo && formik.errors.timeTo
                                    ? <InputError>{formik.errors.timeTo}</InputError>
                                    :null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='capacity'>Capacity</InputLabel>
                                <InputText
                                    id='capacity'
                                    {...formik.getFieldProps('capacity')}
                                />
                                {formik.touched.capacity && formik.errors.capacity
                                    ? <InputError>{formik.errors.capacity}</InputError>
                                    :null
                                }
                            </FormRow>
                            <FormRow>
                                <InputLabel htmlFor='firm'>Firm</InputLabel>
                                <Select id='firm' {...formik.getFieldProps('firm')}>
                                    {firmOptions.map(option =>
                                        <Option value={option.value}>{option.label}</Option>
                                    )}
                                </Select>
                                {formik.touched.firm && formik.errors.firm
                                    ? <InputError>{formik.errors.firm}</InputError>
                                    :null
                                }
                            </FormRow>
                        </Grid>
                        <FormRow>
                            <ButtonSubmit type='submit'>Register</ButtonSubmit>
                        </FormRow>
                    </Form>
                </ModalForm>
            
        </>
    );
}

export default Modal;