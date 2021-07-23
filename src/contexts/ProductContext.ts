import { createContext } from 'react'

const ProductContext = createContext({
    products: [],
    addProduct: (product: any) => {},
    getProduct: (id: any) => {},
    delProduct: (id: any) => {},
})

export default ProductContext
