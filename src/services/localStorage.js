
import { v4 } from 'uuid';

export const getListOfEmployees = () => {
    if (!localStorage["@employes"]) {
        localStorage["@employes"] = JSON.stringify([]);
    }
    let employees = JSON.parse(localStorage["@employes"]);
    return employees;
}

export const getEmployeeById = (id) => {
    const employees = getListOfEmployees();
    const employee = employees.find(employee => employee.id === id);
    return employee;
}

export const addEmployee = (data) => {
    const employees = getListOfEmployees();
    employees.push({ id: v4(), ...data });
    localStorage["@employes"] = JSON.stringify(employees);
}

export const editEmployee = (id, newData) => {
    let employees = getListOfEmployees();
    employees = employees.filter(employee => employee.id !== id);
    employees.push(newData);
    localStorage["@employes"] = JSON.stringify(employees);
}

export const deleteEmployee = (id) => {
    let employees = getListOfEmployees();
    employees = employees.filter(employee => employee.id !== id);
    localStorage["@employes"] = JSON.stringify(employees);
}