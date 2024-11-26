import { Link } from "react-router-dom";

export default function ItemDetail({ name, img, description, category, price, stock }) {
    return (

        <div className="container border border-2 d-flex flex-row justify-content-between mx-auto" style={{ width: "40rem" }} >

            <div className="d-flex flex-column d-flex justify-content-center">
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
                <img className="card-img-top" style={{ width: 80 }} src={img} alt={name} />
            </div>

            <div className="card border border-0" >
                <div className="image-container">
                    <img className="card-img-top" style={{ width: 300 }} src={img} alt={name} />
                </div>

                <div className="card-body">
                    <h5>Categoria: {category}</h5>
                    <h5>Precio: $ {price}</h5>
                    <h5>Cant. Disponible: {stock}</h5>
                    <Link className="btn btn-primary" to="/cart" >Finalizar compra</Link>
                </div>
            </div>

        </div>
    )
}

