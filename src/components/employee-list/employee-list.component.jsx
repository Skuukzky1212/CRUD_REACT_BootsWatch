import { useEffect, useState } from 'react';
import { getListOfEmployees } from '../../services/localStorage';
import EmployeeItem from '../employee-item/employee-item.component'

function EmployeeList() {
    const [employees, setEmployees] = useState([]);
    useEffect(()=> {
        setEmployees(getListOfEmployees());
    }, []);
    return ( 
        <div>
            <h1 className="my-5 text-center">Manage Employee</h1>
            {
                employees.length > 0 ? (
                    <div className="card bg-secondary p-3"> 
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Address</td>
                                    <td>Phone</td>
                                    <td>Actions</td>
                                </tr>
                            </thead>
                            <tbody>
                                {employees.map((employee) => (
                                    <EmployeeItem 
                                        key={employee.id} 
                                        employee={employee}
                                        setEmployees={setEmployees}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3 className='text-center'>No Employees in list!</h3>
                )
            }
            
        </div>
     );
}

export default EmployeeList;