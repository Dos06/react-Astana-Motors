const Header = () => {
    return (
        <div className="header w-100 mb-5">
            <div className="hb-inner w-100">
                <nav className="navbar w-100 px-0 mx-0 fixed-top navbar-expand-lg navbar-light bg-light shadow bg-white rounded">
                    <div className="container justify-content-between">
                        <div className="row w-100">
                            <div className="col-sm-1">
                                <a className="navbar-brand" href="#">
                                    <img src="./../../img/astana_motors_logo.png" width="150" height="auto" alt="logo"/>
                                </a>
                            </div>
                            <div className="col-sm-8 offset-3 d-flex">
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav ml-auto">
                                        <li className="link nav-item my-auto active">
                                            <a href="#" className="nav-link"><b>Home</b></a>
                                        </li>
                                        <li className="link nav-item my-auto"><a href="#" className="nav-link"><b>About
                                            Us</b></a></li>
                                        <li className="link nav-item my-auto"><a href="#"
                                                                                 className="nav-link"><b>Services</b></a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" id="navbarInventoryDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <b>Inventory</b>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarInventoryDropdown">
                                                <a className="dropdown-item" href="#">Brands</a>
                                                <a className="dropdown-item" href="#">Models</a>
                                                <a className="dropdown-item" href="#">Prices</a>
                                            </div>
                                        </li>
                                        <li className="link nav-item my-auto">
                                            <a href="#" className="nav-link"><b>Contacts</b></a>
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