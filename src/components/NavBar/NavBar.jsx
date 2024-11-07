import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">

            <div className="container-fluid">

                <a className="navbar-brand" href="#">
                    <img style={{ width: '96px' }} src="icon/icoremar_logo.png" className="logo icoremar" alt="logo" />
                    <span style={{ fontSize: '32px' }}>iCoremar</span>

                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <CartWidget amount={10} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
