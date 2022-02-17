import {useEffect, useState} from 'react'
import ItemCount from "../ItemCount/ItemCount"
import {traerProductos} from "../Mock/products"
import ItemList from '../ItemList/ItemList'


const ItemListContainer = ({ greeting='hola mundo'}) => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        traerProductos
        .then((resolve) => {
            setProducts(resolve)
        })
        .catch((error) => {
            console.log(error)
        })
        .finally(() => {
            //ejecutar siempre
        })
    }, [])

    const handleOnAdd = (count) => {
        console.log(`Se agregaron ${count} productos`)
    }


    return(
        <div className="App">
            <h1>{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={handleOnAdd}/>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer