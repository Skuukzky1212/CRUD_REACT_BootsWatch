import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import { addEmployee, editEmployee, getEmployeeById } from "../../services/localStorage";
import * as yup from 'yup';
import { useFormik } from 'formik'
function EmployeeForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            address: '',
            phone: '',
        },
        onSubmit: (values) => {
            id ? editEmployee(id, values) : addEmployee(values);
            formik.resetForm();
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        },
        validationSchema: yup.object({
            name: yup.string().required("This field is required")
                .min(4, "Name must be 4 characters or more!"),
            email: yup.string().required("This field is required")
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "This email is invalid!"),
            address: yup.string().required("This field is required")
                .min(8, "Address must be 4 characters or more!"),
            phone: yup.string().required("This field is required")
                .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "This phone number is invalid")   
        }) 

        ,   
    })
   
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            formik.setValues(employee)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    return ( 
        <div>
            {/* Form Header */}
            <div className="d-flex my-5 justify-content-between">
                <button className="btn btn-outline-secondary" onClick={()=> {navigate("/")}}>Back to home</button>
                <h1>{id ? 'Edit' : 'Add'} Employee</h1>
                <div></div>
            </div>
            {showAlert && (
                    <div className="px-5">
                        <div className="alert alert-success text-white" role="alert">
                            You {id ? 'edited an' : 'added a new'} employee!
                        </div>
                    </div>
                )}
            {/* form Body */}
            <div className="card border-secondary p-5 m-5">
                
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="name">Name</label>
                        <input
                            type="text" 
                            name="name"
                            value={formik.values.name || ""}
                            onChange={formik.handleChange}
                            className="form-control" 
                            id="name" 
                            placeholder="Input employee name..."/>
                    </div>
                    {formik.errors.name && (
                        <p className="errorMsg">{formik.errors.name}</p>
                    )}
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formik.values.email || ""}
                            onChange={formik.handleChange}
                            className="form-control" 
                            id="email" 
                            placeholder="Input employee email..."/>
                    </div>
                    {formik.errors.email && (
                        <p className="errorMsg">{formik.errors.email}</p>
                    )}
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            name="address"
                            value={formik.values.address || ""}
                            onChange={formik.handleChange}
                            className="form-control" 
                            id="address"
                            placeholder="Input employee address..."/>
                    </div>
                    {formik.errors.address && (
                        <p className="errorMsg">{formik.errors.address}</p>
                    )}
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="phone">Phone number</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={formik.values.phone || ""}
                            onChange={formik.handleChange}
                            className="form-control" 
                            id="phone" 
                            placeholder="Input employee phone number..."/>
                    </div>
                    {formik.errors.phone && (
                        <p className="errorMsg">{formik.errors.phone}</p>
                    )}
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn border-secondary btn-secondary">{id ? 'EDIT' : 'ADD'} EMPLOYEE</button>
                    </div>
                    
                </form>   
            </div>
        </div>
     );
}

export default EmployeeForm;