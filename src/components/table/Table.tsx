import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"

const Table = () => {
    const context = useContext(ProductContext)
    return (
        <div className="card-body">
            <table className="table">
                <tbody>
                    {context.products.map((product: any) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => context.delProduct(product.id)}>Remover</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Table
