export const products = [
    {
        id: 1,
        name: 'celular',
        stock: 5,
        price: 30000,
        img: './img/celular.jpg',
        category: 'celulares', 
    },
    {
        id: 2,
        name: 'tablet',
        stock: 3,
        price: 40000,
        img: './img/tablet.jpg',
        category: 'tablets', 
    },
    {
        id: 3,
        name: 'computadora',
        stock: 7,
        price: 50000,
        img: './img/computadora.jpg',
        category: 'computadoras', 
    },
]

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve(products)
    }, 3000)

})