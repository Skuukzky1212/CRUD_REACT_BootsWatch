import { useNavigate } from 'react-router-dom';
function NavBar() {
    const navigate = useNavigate();
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href=".#">CRUD APP</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                </div>
                <form className="d-flex">
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit" 
                        onClick={()=> {navigate("/create-employee")}}>
                        CREACT EMPLOYEE
                    </button>
                </form>
            </div>
        </nav>
     );
}

export default NavBar;