
export default function Checkout() {

    return (
        <div>
            <h2 className="text-center">Confirmación de pago</h2>
            <div className="container align-middle" style={{ width: 400 }} >
                <form>
                    <div className="mb-3">
                        <label htmlFor="nameInput1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nameInput1" aria-describedby="nameHelp" placeholder="Nombre(s) del titular" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="nameInput2" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nameInput2" aria-describedby="nameHelp2" placeholder="Apellido(s) del titular" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="emailInput" className="form-label">Email</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="pedro@micorreo.com" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="phoneInput" className="form-label">Telefono</label>
                        <input type="number" className="form-control" id="phoneInput" aria-describedby="phoneHelp" placeholder="+54 555 555555" />
                    </div>

                    <h5 className="mb-3">Metodo de pago</h5>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" ></input>
                            <label className="custom-control-label" htmlFor="credit">Tarjeta de crédito</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" ></input>
                            <label className="custom-control-label" htmlFor="credit">Tarjeta de debito</label>
                        </div>
                    </div>

                    <button type='submit' className="btn btn-primary">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

