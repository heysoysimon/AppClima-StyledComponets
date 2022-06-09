import useClima from "../hooks/useClima"
import styled from "@emotion/styled"

/* estilos */

const Temperatura = styled.p`
  font-size: 25px
`

const Grados = styled.span`
font-size: 20px;  

`

const Resultado = () => {

  const {resultado} = useClima()

  const {name, main} = resultado
   
console.log(resultado)

/* grados kelvin */

const kelvin = 273.15
  return (
   <>
     <h3> El clima en {name} </h3>

     
     <Temperatura> El clima Actual es : { parseInt(main.temp - kelvin) } <Grados>&#x2103;</Grados></Temperatura>
     <Temperatura>  La temperatura Minimo es : { parseInt(main.temp_min - kelvin) } <Grados>&#x2103;</Grados></Temperatura>
     <Temperatura>  La temperatura Maxima es : { parseInt(main.temp_max - kelvin) } <Grados>&#x2103;</Grados></Temperatura>
   </>
  )
}

export default Resultado
