const products = [

    {
        id: "7",
        name: "Ipad Mini",
        price: 1200,
        category: "tablet",
        img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
        stock: 0,
        description: "Descripcion de Ipad mini",
        discount:15
    },
    {
        id: "8",
        name: "notebook",
        price: 1200,
        category: "computer",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 0,
        description: "Descripcion de Ipad",
        discount:10
    },
    {
        id: "9",
        name: "notebook",
        price: 1200,
        category: "computer",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 0,
        description: "Descripcion de computer",
        discount:25
    },
    {
        id: "10",
        name: "Fotocopiado",
        price: 20,
        category: "copycenter",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 0,
        description: "Descripcion de Fotocopiado",
        discount:25
    },
    {
        id: "11",
        name: "Lapicero",
        price: 20,
        category: "office",
        img: "https://bangho.vtexassets.com/arquivos/ids/161330/notebook-gamer-gm-15z12-gtx1650-4gb-gddr6-windows-11-1.jpg?v=638082621108000000",
        stock: 0,
        description: "Descripcion de Lapicero",
        discount:25
    },
];

// obtener todos los productos
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 1000);
    });
};

// obtener los productos por categoria
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod) => prod.category === categoryId));
        }, 1000);
    });
};

// obtener un solo producto por id
export const getProductByID = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 1000);
    });
};