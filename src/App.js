import { Routes, Route } from 'react-router-dom'
import Navbar from './components/nav-bar'
import EmployeeForm  from './components/employee-form'
import EmployeeList from './components/employee-list'
function App() {
  return (
    <div>
      <Navbar />
      <div className="container"> 
   
        <Routes>
          <Route path="/" element={<EmployeeList />}/>
          <Route path="/create-employee" element={<EmployeeForm />}/>
          <Route path="/edit-employee/:id" element={<EmployeeForm />}/>
        </Routes>
     
      </div>
    </div>
  );
}

export default App;
