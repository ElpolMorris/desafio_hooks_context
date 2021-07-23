import { useState } from 'react'
import Form from '../../components/form/Form'
import Table from '../../components/table/Table'
import ProductContext from '../../contexts/ProductContext'

const Home = () => {
    const [products, setProduct] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
    }])

    const addProduct = (product: any ) => {
        // generamos un id a partir de la fecha para luego poder buscar
        // ademas de esta manera no se repetira
        const id = new Date().getTime()
        setProduct([...products,{id, product}])
        console.log(id)
    }

    const delProduct = (id: any) => {
        console.log(`delete ${id}`);
        
    }

    const getProduct = () => {
        
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
