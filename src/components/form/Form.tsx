import { useContext, useState } from "react"
import ProductContext from "../../contexts/ProductContext"
import useInput from "../../hooks/useInput"

const Form = () => {

    const [nameProduct, setNameProduct] = useInput("")
    const [value, setValue] = useInput("")
    const [validated, setValidated] = useState(true)

    const {addProduct} = useContext(ProductContext)
    
    const validateInput = (inputValue: string) => {
        inputValue? setValidated(false) :setValidated(true)        
    }
    const disabled = () => {
        return nameProduct === '' || value === ''
    }
    const handlerSubmit: any = (event: any) => {
        event.preventDefault()
        validateInput(nameProduct)
        validateInput(value)
        if (validated){
            addProduct({name:nameProduct,price:value})
        }else {
            alert("todos los campos deben tener un valor de tipo texto")
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
                <input onChange={setValue} type="text" className="form-control"/>
            </div>
            <div className="text-center py-1">
                <button type="submit" className="btn btn-success btn-lg btn-block rounded-pill" disabled={disabled()}>Ingresar</button>
            </div>
        </form>
    )
}

export default Form
