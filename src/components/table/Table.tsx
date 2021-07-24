import { useContext,useState } from "react"
import ProductContext from "../../contexts/ProductContext"
import Detalles from "../details/Detalles"
const Table = () => {
    const context = useContext(ProductContext)

    const [idProd, setIdProd] = useState(0)   
    
    return (
        <div className="card-body">
            <table className="table">
                <tbody>
                    {context.products.map((product: any) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-sm btn-dark mx-3" onClick={() => {setIdProd(product.id)}}>Detalles</button>
                                <button className="btn btn-sm btn-danger" onClick={() => context.delProduct(product.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Detalles id={idProd} /> 
        </div>
    )
}

export default Table
