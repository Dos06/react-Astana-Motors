import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className="header w-100 mb-5">
            <div className="hb-inner w-100">
                <nav className="navbar w-100 px-0 mx-0 fixed-top navbar-expand-lg navbar-light bg-light shadow bg-white rounded">
                    <div className="container justify-content-between">
                        <div className="row w-100">
                            <div className="col-sm-1">
                                <NavLink to="/" className="navbar-brand" activeClassName='active'>
                                    <img src="./../../img/astana_motors_logo.png" width="150" height="auto" alt="logo"/>
                                </NavLink>
                            </div>
                            <div className="col-sm-8 offset-3 d-flex">
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="link nav-item my-auto">
                                            <NavLink to="/" exact className="nav-link" activeClassName='active'><b>Home</b></NavLink>
                                        </li>
                                        <li className="link nav-item my-auto dropdown">
                                            <NavLink to="/news" className="nav-link" activeClassName='active' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><b>News</b></NavLink>
                                        </li>
                                        <li className="link nav-item my-auto">
                                            <NavLink to="/about" className="nav-link" activeClassName='active'><b>About Us</b></NavLink>
                                        </li>
                                        <li className="link nav-item my-auto">
                                            <NavLink to="/services" className="nav-link" activeClassName='active'><b>Services</b></NavLink>
                                        </li>
                                        <li className="link nav-item my-auto">
                                            <NavLink to="/contact" className="nav-link" activeClassName='active'><b>Contacts</b></NavLink>
                                        </li>
                                        <li className="link nav-item my-auto">
                                            <NavLink to="/login" className="nav-link" activeClassName='active'><b>Login</b></NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;