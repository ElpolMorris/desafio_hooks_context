import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"
import useInput from "../../hooks/useInput"
import useInputNumber from "../../hooks/useInputNumber"

const Form = () => {

    const [nameProduct, setNameProduct] = useInput("")
    const [value, setValue] = useInputNumber(0)

    const {addProduct} = useContext(ProductContext)
    
    const validateInput = (inputValue: string) => {
        const verif = inputValue !== ""
        return verif        
    }
    const validateInputNumber = (inputValue: number) => {
        const verif = inputValue > 1
        return verif    
    }
    const disabled = () => {
        return nameProduct === '' || value === ''
    }
    const handlerSubmit: any = (event: any) => {
        event.preventDefault()
        if (validateInput(nameProduct) && validateInputNumber(value)){
            addProduct({name:nameProduct,price:value})
        }else {
            alert("todos los campos deben tener un valor o alguno de los campos no tienen el formato adecuado")
        }
        
    }

    return (
        <form onSubmit={handlerSubmit} className="border p-2 rounded-lg">
            <div className="form-group">
                <label >Ingrese Producto</label>
                <input onChange={setNameProduct} type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label >Ingrese Precio</label>
                <input onChange={setValue} type="number" className="form-control"/>
            </div>
            <div className="text-center py-1">
                <button type="submit" className="btn btn-success btn-lg btn-block rounded-pill" disabled={disabled()}>Ingresar</button>
            </div>
        </form>
    )
}

export default Form
