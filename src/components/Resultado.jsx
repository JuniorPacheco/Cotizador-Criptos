import styled from "@emotion/styled"

const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`

const Resultado = ({resultado}) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = resultado;
  return (
    <ResultadoDiv>
        <Imagen 
        src={`https://cryptocompare.com/${IMAGEURL}`} 
        alt="Imagen cripto" 
        />
        <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
            <Texto>Variación ultimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
        </div>
    </ResultadoDiv>
  )
}

export default Resultado