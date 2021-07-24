import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"
import styles from "../details/Detalles.module.css"
interface Prod{
    id: number;

}

const Detalles = ({id}: Prod) => {
    const {getProduct} = useContext(ProductContext)
    const data: any = getProduct(id)
    return (
        <div className={`card ${styles.verdeAgua} ${styles.moveleft}`}>
            <div className="card-body">
                <h5 className={`card-title text-center ${styles.rainbow}`}>{data.name}</h5>
                <div>
                    <span className="px-5">id: {data.id}</span>
                    <span className={`${styles.italic}`}>precio: ${data.price}</span>
                </div>
            </div>
        </div>
            )
}

export default Detalles