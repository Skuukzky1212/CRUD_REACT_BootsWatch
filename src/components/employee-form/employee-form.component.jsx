import { useEffect, useState } from "react";
import {useNavigate, useParams} from "react-router-dom";
import useForm from "../../hooks/useForm";
import { addEmployee, editEmployee, getEmployeeById } from "../../services/localStorage";
function EmployeeForm() {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        id ? editEmployee(id, inputValues) : addEmployee(inputValues);
        resetForm();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000)
        
    };
    const { inputValues, handleInputChange, resetForm, setForm } = useForm({
        name: '',
        email: '',
        address: '',
        phone: '',
    });
    const [showAlert, setShowAlert] = useState(false);
    useEffect(() => {
        if (id) {
            const employee = getEmployeeById(id);
            setForm(employee);
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
                
                <form onSubmit={handleSubmitForm}>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="name">Name</label>
                        <input
                            type="text" 
                            name="name"
                            value={inputValues.name || ""}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="name" 
                            placeholder="Input employee name..."/>
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={inputValues.email || ""}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="email" 
                            placeholder="Input employee email..."/>
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="address">Address</label>
                        <input 
                            type="text" 
                            name="address"
                            value={inputValues.address || ""}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="address"
                            placeholder="Input employee address..."/>
                    </div>
                    <div className="form-group">
                        <label className="form-label mt-2" htmlFor="phone">Phone number</label>
                        <input 
                            type="tel" 
                            name="phone" 
                            value={inputValues.phone || ""}
                            onChange={handleInputChange}
                            className="form-control" 
                            id="phone" 
                            placeholder="Input employee phone number..."/>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn border-secondary btn-secondary">{id ? 'EDIT' : 'ADD'} EMPLOYEE</button>
                    </div>
                    
                </form>   
            </div>
        </div>
     );
}

export default EmployeeForm;