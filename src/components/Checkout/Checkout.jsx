
export default function Checkout() {
    return (
        <div>
            <h2 className="text-center">Confirmación de pago</h2>
            <div className="container align-middle" style={{ width: 400 }} >
                <form>
                    <div class="mb-3">
                        <label for="nameInput1" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nameInput1" aria-describedby="nameHelp" placeholder="Nombre(s) del titular" />
                    </div>

                    <div class="mb-3">
                        <label for="nameInput2" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nameInput2" aria-describedby="nameHelp2" placeholder="Apellido(s) del titular" />
                    </div>

                    <div class="mb-3">
                        <label for="emailInput" class="form-label">Email</label>
                        <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="pedro@micorreo.com" />
                    </div>

                    <div class="mb-3">
                        <label for="phoneInput" class="form-label">Telefono</label>
                        <input type="number" class="form-control" id="phoneInput" aria-describedby="phoneHelp" placeholder="+54 555 555555" />
                    </div>

                    <h5 className="mb-3">Metodo de pago</h5>
                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                            <label class="custom-control-label" for="credit">Tarjeta de crédito</label>
                        </div>

                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required></input>
                            <label class="custom-control-label" for="credit">Tarjeta de debito</label>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Confirmar</button>
                </form>
            </div>
        </div>
    )
}

