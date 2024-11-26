import { Link } from "react-router-dom";

export default function Item({ product }) {
    return (
        <div className="card mx-2 mt-5 shadow p-3 mb-5 bg-body rounded">
            <div className="image-container">
                <div className="first">
                        <span className="badge text-bg-warning mx-1">-{product.discount}%</span>
                </div>
                <img className="card-img-top" src={product.img} style={{ width: 300 }} alt={product.name}/>
            </div>

            {/* <img src={product.img} alt={product.name} className="card-img-top" /> */}

            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <Link to={`/detail/${product.id}`} className="btn btn-primary">Ver detalle</Link>
            </div>

        </div>
    )
}

