import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(1)
    
    const decrement = () => {
        if(count > initial ) {
            setCount(count - 1)
        } 
    }
    
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
            console.log("hola")
        }
    }
    

    return(
        /*
        <>
        <h3 className='border border-3 rounded-pill'>Item Count</h3>
        <button onClick={decrement}>-</button>
        <h3>{count}</h3>
        <button onClick={increment}>+</button>
        </>
*/
    <>
        <h3 className='border border-3 rounded-pill w-25 p-3 h-25 d-inline-block'>Item Count</h3>
        <div className='container'>
            <div className='row justify-content-md-center'>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={decrement}>-</button>
                <h3 className='col-md-auto'>{count}</h3>
                <button className='col col-lg-2 btn btn-primary btn-sm' type="button" onClick={increment}>+</button>
            </div>
        </div>
    </>
    )
}

export default ItemCount