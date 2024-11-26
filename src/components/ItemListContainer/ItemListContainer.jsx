import '../ItemListContainer/ItemListContainer.css';

import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../Itemlist/ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export default function ItemListContainer() {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        const asyncFunction = categoryId ? getProductsByCategory : getProducts
        asyncFunction(categoryId)
            .then(data => setProducts(data))
    }, [categoryId])

    return (
        <div>
            <h2 className="text-center">Los mejores productos disponibles a precios increíbles</h2>
            {products 
                ? <ItemList products={products}/> 
                : <span>Yoliiii</span> }
        </div>
    )
}
