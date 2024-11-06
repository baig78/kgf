import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import './MembershipForm.css';

// Validation schema
const schema = yup.object().shape({
    surname: yup.string().required("Surname is required"),
    name: yup.string().required("Name is required"),
    gothram: yup.string().required("Gothram is required"),
    dateOfBirth: yup.string().required("Date of Birth is required"),
    age: yup.string().required("Age is required"),
    whatsapp: yup.string().required("WhatsApp Number is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    district: yup.string().required("District is required"),
    mandal: yup.string().required("Mandal is required"),
    address: yup.string().required("Address is required"),
    nativePlace: yup.string().required("Native Place is required"),
    profession: yup.string().required("Profession is required"),
});

function MembershipForm() {
    const { register, handleSubmit, setValue, trigger, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const [step, setStep] = useState(1);
    const [touchedFields, setTouchedFields] = useState({});
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        toast.success("Form submitted successfully!"); // Show success toast
    };

    const handleNext = async () => {
        const isValid = await trigger(["surname", "name", "gothram", "dateOfBirth", "age", "whatsapp"]);
        if (isValid) {
            setStep(2);
        } else {
            setTouchedFields({
                surname: true,
                name: true,
                gothram: true,
                dateOfBirth: true,
                age: true,
                whatsapp: true,
            });
        }
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    return (
        <>
            <ToastContainer /> {/* Add ToastContainer here */}
            <form className="membership-form" onSubmit={handleSubmit(onSubmit)}>
                <h2>KGF Membership Form</h2>
                {step === 1 && (
                    <>
                        <button className="back-button" onClick={handleBackClick}>
                            Back
                        </button>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Upload Latest Photo</label>
                                <input type="file" {...register("photo")} />
                            </div>
                            <div className="form-group">
                                <label>Membership ID </label>
                                <input type="text" value="123" readOnly />
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Surname <span className="required">*</span></label>
                                <input
                                    type="text"
                                    {...register("surname")}
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, surname: false }))}
                                />
                                {touchedFields.surname && <p className="error">{errors.surname?.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>Name <span className="required">*</span></label>
                                <input
                                    type="text"
                                    {...register("name")}
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, name: false }))}
                                />
                                {touchedFields.name && <p className="error">{errors.name?.message}</p>}
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Gothram <span className="required">*</span></label>
                                <input
                                    type="text"
                                    {...register("gothram")}
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, gothram: false }))}
                                />
                                {touchedFields.gothram && <p className="error">{errors.gothram?.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>Date of Birth <span className="required">*</span></label>
                                <input
                                    type="date"
                                    {...register("dateOfBirth")}
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, dateOfBirth: false }))}
                                />
                                {touchedFields.dateOfBirth && <p className="error">{errors.dateOfBirth?.message}</p>}
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Age <span className="required">*</span></label>
                                <input
                                    type="number"
                                    {...register("age")}
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, age: false }))}
                                />
                                {touchedFields.age && <p className="error">{errors.age?.message}</p>}
                            </div>
                            <div className="form-group">
                                <label>WhatsApp Number <span className="required">*</span></label>
                                <PhoneInput
                                    country={'us'}
                                    onChange={(value) => {
                                        setValue('whatsapp', value);
                                        trigger('whatsapp');
                                    }}
                                    inputClass="whatsapp-input"
                                    onBlur={() => setTouchedFields(prev => ({ ...prev, whatsapp: false }))}
                                />
                                {touchedFields.whatsapp && <p className="error">{errors.whatsapp?.message}</p>}
                            </div>
                        </div>
                        <div className='next-button'>
                            <button type="button" onClick={handleNext} className="next-btn">
                                Next
                            </button>
                        </div>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Email <span className="required">*</span></label>
                                <input type="email" {...register("email")} />
                                <p className="error">{errors.email?.message}</p>
                            </div>
                            <div className="form-group">
                                <label>Country <span className="required">*</span></label>
                                <input type="text" {...register("country")} />
                                <p className="error">{errors.country?.message}</p>
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>State <span className="required">*</span></label>
                                <input type="text" {...register("state")} />
                                <p className="error">{errors.state?.message}</p>
                            </div>
                            <div className="form-group">
                                <label>District <span className="required">*</span></label>
                                <input type="text" {...register("district")} />
                                <p className="error">{errors.district?.message}</p>
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Mandal <span className="required">*</span></label>
                                <input type="text" {...register("mandal")} />
                                <p className="error">{errors.mandal?.message}</p>
                            </div>
                            <div className="form-group">
                                <label>Village/Street & Door No <span className="required">*</span></label>
                                <input type="text" {...register("address")} />
                                <p className="error">{errors.address?.message}</p>
                            </div>
                        </div>

                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Native Place <span className="required">*</span></label>
                                <input type="text" {...register("nativePlace")} />
                                <p className="error">{errors.nativePlace?.message}</p>
                            </div>
                            <div className="form-group">
                                <label>Profession <span className="required">*</span></label>
                                <input type="text" {...register("profession")} />
                                <p className="error">{errors.profession?.message}</p>
                            </div>
                        </div>
                        <div className='footer-button'>
                            <button type="button" onClick={() => setStep(1)} className="step-back-button">
                                Back
                            </button>
                            <button type="submit" className="submit-button">Submit</button>
                        </div>
                    </>
                )}
            </form>
        </>
    );
}

export default MembershipForm;
