import { useEffect, useState } from "react"
import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import Error from "./Error"
import { monedas } from '../data/monedas.js'

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);

    const [ moneda, SelecMonedas ] = useSelectMonedas('Elige tu Moneda', monedas);
    const [ criptomoneda, SelectCriptomonedas ] = useSelectMonedas('Elige tu Criptomoneda', criptos);

    useEffect(() => {
        const apiRequest = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            const arrayCriptos = resultado.Data.map(element => {
                const objeto = {
                    id: element.CoinInfo.Name,
                    nombre: element.CoinInfo.FullName
                }
                return objeto;
            })
            setCriptos(arrayCriptos);
        }
        apiRequest();

    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true);

            setTimeout(() => {
                setError(false)
            }, 1500)
            return
        }

        setMonedas({moneda, criptomoneda})
    }

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form>

            <SelecMonedas />
            <SelectCriptomonedas />

            <InputSubmit 
            type="submit" 
            value='Cotizar'
            onClick={handleSubmit}
            />
        </form>
    </>
  )
}

export default Formulario