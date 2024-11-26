import { Link } from "react-router-dom";

export default function ItemDetail({ name, img, description, category, price, stock }) {
    return (


        <div className="container w-50 p-3">
            <h2>{name}</h2>
            {/* <div className="card">

                <img
                    className="card-img-top"
                    style={{ width: 300 }}
                    src={img}
                    alt={name}
                />

                <div className="card-body">
                    <h4>Categoria: {category}</h4>
                    <h4>Precio: $ {price}</h4>
                    <h4>Cant. Disponible: {stock}</h4>
                </div>
                <Link className="btn btn-primary" to="/cart" >Finalizar compra</Link>
            </div> */}


            <div className="row align-items-center ">
                <div className="col">
                    <div className="d-flex flex-column justify-content-between">
                        <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                        <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                        <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                    </div>
                </div>

                <div className="col">
                    <img
                        className="card-img-top"
                        style={{ width: 300 }}
                        src={img}
                        alt={name}
                    />
                </div>
                <div className="col">
                    <div className="card-body">
                        <h5>Categoria: {category}</h5>
                        <h5>Precio: $ {price}</h5>
                        <h5>Cant. Disponible: {stock}</h5>
                    </div>
                </div>
                <Link className="btn btn-primary" to="/cart" >Finalizar compra</Link>
            </div>

        </div>
    )
}

