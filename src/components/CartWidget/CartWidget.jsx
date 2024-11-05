
export default function CartWidget({ amount }) {
    return (
        <a className="nav-link">
            <img style={{ width: "32px" }} src="icon/sales_cart.png" className="logoCart" alt="logoCart"/>
            <span className="badge text-bg-secondary">{amount}</span>
        </a>
    )
}
