import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <div>
      <h2 className="text-center">Tu Compra</h2>
      
      <div className="container align-middle" style={{ width: 400 }}>
        <ul class="list-group">
          <li class="list-group-item">producto 1</li>
          <li class="list-group-item">producto 1</li>
          <li class="list-group-item">producto 1</li>
          <li class="list-group-item">producto 1</li>
        </ul>
        <Link className="btn btn-primary" to='/checkout'>Comprar</Link>
      </div>

    </div>

  )
}
