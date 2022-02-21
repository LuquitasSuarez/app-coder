import {useEffect, useState} from 'react'
import {getProduct} from "../Mock/products";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        getProduct
        .then((resolve) => {
            setProduct(resolve)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            //ejecutar siempre
        })
    }, [])
    
    return(
        <div>
            <h1>Item Detail Container</h1>
            <ItemDetail {...product} key={product.id}/>
        </div>
    )
}

export default ItemDetailContainer