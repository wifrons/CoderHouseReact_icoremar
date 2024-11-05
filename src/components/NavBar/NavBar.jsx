import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="nav-link" style={{ marginRight: '200px' }}>
                    <img style={{ width: '96px' }} src="/public/icon/icoremar_logo.png" className="logo icoremar" alt="logo" />
                    <span style={{ fontSize: '32px' }}>ICoremar</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Oficina</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Computación</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Digitalización</a>
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
