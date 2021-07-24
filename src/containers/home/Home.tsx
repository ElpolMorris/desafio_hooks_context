import { useState } from 'react'
import Form from '../../components/form/Form'
import Table from '../../components/table/Table'
import ProductContext from '../../contexts/ProductContext'

interface Prod{
    id: number;
    name: string;
    price: number;
}

const Home = () => {
    const [products, setProduct] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
    }])

    const addProduct = ({name,price}: any ) => {
        // generamos un id a partir de la fecha para luego poder buscar
        // ademas de esta manera no se repetira
        const id = new Date().getTime()
        setProduct([...products,{id, name,price}])
        console.log(id)
    }

    const delProduct = (id: number) => {
        const productToDelete = products.filter((product: Prod) => product.id !== id)
        setProduct(productToDelete)
        console.log(`delete ${id}`);        
    }

    const getProduct = (id: number) => {
        const findedProduct = products.find((product: Prod)=> product.id === id)
        return findedProduct || {name:"detalle producto",price:0,id:0}
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="col-12 col-sm-6 offset-sm-3">
                <h1 className="text-center">CRUD de Productos</h1>
                <Form />
                <Table />
            </div>
        </ProductContext.Provider>
    )
}

export default Home
