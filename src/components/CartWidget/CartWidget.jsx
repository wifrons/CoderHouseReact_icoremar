
export default function CartWidget({ amount }) {
    return (
        <a className="nav-link">
            <img style={{ width: '32px' }} src="/public/icon/sales_cart.png" className="logo icoremar" alt="logo"/>
            <span className="badge text-bg-secondary">{amount}</span>
        </a>
    )
}
