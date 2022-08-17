import { useNavigate } from "react-router-dom";
import { deleteEmployee, getListOfEmployees } from "../../services/localStorage";

function EmployeeItem({ employee, setEmployees }) {
const navigate = useNavigate();
const removeEmployee = () => {
    deleteEmployee(employee.id);
    setEmployees(getListOfEmployees);
}

    return ( 
        <>
            <tr>
                <th>{employee.name}</th>
                <th>{employee.email}</th>
                <th>{employee.address}</th>
                <th>{employee.phone}</th>
                <th>
                    <div className="d-flex gap-3">
                        <span role="button" className="badge bg-success" onClick={() => {navigate(`edit-employee/${employee.id}`)}}>
                            Edit 
                        </span>
                        <span role="button" className="badge bg-danger" onClick={removeEmployee}>Delete</span>
                    </div>
                </th>
            </tr>
        </>
     );
}

export default EmployeeItem;