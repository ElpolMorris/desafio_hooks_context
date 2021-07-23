import { useState } from 'react'
import Table from '../../components/table/Table'
import ProductContext from '../../contexts/ProductContext'

const Home = () => {
    const [products, setProduct] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
    }])

    const addProduct = () => {
        // generamos un id a partir de la fecha para luego poder buscar
        // ademas de esta manera no se repetira
        const id = new Date().getTime()
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
                <Table />
            </div>
        </ProductContext.Provider>
    )
}

export default Home
