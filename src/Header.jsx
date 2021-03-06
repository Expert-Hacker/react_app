import react from 'react';
import Tooltip from '@material-ui/core/Tooltip';
// import './index.css';
function Header(){
    return(
        <>
       <nav className="navbar navbar-expand-lg navbar-light navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"/>Navbar
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex">
        <input  className="form-control me-2 inp" type="search" placeholder="Search" aria-label="Search"/>
        <Tooltip title="Search this Blog"><button className="btn btn-outline-success" type="submit">Search</button></Tooltip>
      </form>
    </div>
  </div>
</nav>
      
        </>
    )
}
export default Header;