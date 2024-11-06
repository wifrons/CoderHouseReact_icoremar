import '../ItemListContainer/ItemListContainer.css'

export default function ItemListContainer({ greeting, color }) {
    return (
        <>
            <div className="main">
                {<h2 style={{ color: color, margin: "50px", textAlign: "center" }}>{greeting}</h2>}


                <div className="cards">
                    <div className="productsOfi">
                        <div className="productsOfi-actions">
                            <h1>Oficina</h1>
                            <p>Encuentra artículos para tu oficina y eleva tu rendimiento.</p>
                            <a href="productsOfic.html">Ver mas</a>
                        </div>
                        <div className="productsOfi-image">
                            <img src="icoremar_ofi.png" alt="" id="productsOfi-img" />
                        </div>
                    </div>
                    <div className="productsCom">
                        <div className="productsCom-actions">
                            <h1>Computación</h1>
                            <p>Elige tu dispositivo electronico: Computadora, Impresora, Monitor y Accesorios.</p>
                            <a href="productsCompu.html">Ver mas</a>
                        </div>
                        <div className="productsCom-image">
                            <img src="icoremar_compu.png" alt="" id="productsCom-img" />
                        </div>
                    </div>
                    <div className="productsCop">
                        <div className="productsCop-actions">
                            <h1>Digitalización</h1>
                            <p>Servicios de Centro de copiado de alta calidad, Blanco/Negro y a Color.</p>
                            <a href="#productsCop.html">Ver mas</a>
                        </div>
                        <div className="productsCop-image">
                            <img src="icoremar_copy.png" alt="" id="productsCop-img" />
                        </div>
                    </div>

                </div>
                <div className="ofertas">
                    <hr />
                    <h1>Nuestras Ofertas</h1>
                </div>

            </div>

        </>
    )
}
