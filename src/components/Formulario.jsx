import styled from '@emotion/styled'
import useClima from '../hooks/useClima'
import { useState} from 'react'

const MensajeAlerta = styled.h2`
  color: #fff;
  font-weight: 100;
  font-size: 25px;

`

const ContenedorAlerta = styled.div`
  background: #d90429;
  padding: 10px;

`
const Input = styled.input`
   background-color: #06d6a0;
        border: none;
        width: 40%;
        padding: 10px;
        color: #fff;
        font-weight: 100;
        text-transform: uppercase;
        font-size: 20px;
        border-radius: 5px;
        transition: bacground-color .3ss ease;
        margin-top: 30px;

         &:hover{
             background-color: #3a0ca3;
             color: #fff;
             transition: ease-in 0.5s;
             cursor: pointer;
         }
         @media ( max-width: 600px){
              width: 70%;
              }
          @media ( max-width: 600px){
            width: 80%;
            font-size: 15px;
  }
`

const BuscarCiudad = styled.input`
  
  width: 90%;
  font-size: 18px;
  padding: 14px;
  border: none;
  border-radius: 10px;

`
const Label  = styled.label`
    color: #000;
    display: block;
    font-family: 'lato', sans-serif;
    font-size: 24px;
    order: none;
    font-weight: 200;
    margin: 15px 0;
`
const Select  = styled.select`
    width: 90%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
`
const Formulario = () => {

  const [alerta, setAlerta] = useState('')

  const { busqueda, datosBusqueda, consultarClima } = useClima()

  const { ciudad, pais } = busqueda

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(busqueda).includes('')) {
        setAlerta(<ContenedorAlerta>
          <MensajeAlerta>
            todos los campos son obligatorios
          </MensajeAlerta>
        </ContenedorAlerta>);
        return
    }
    setAlerta('')
    consultarClima(busqueda)

}
   
  return (
    <>
     {/*  <Textos> desde formulario</Textos> */}


     {alerta && <p>{alerta}</p>}
      <form
        onSubmit={handleSubmit}
      >

      <Label htmlFor="campo">

      <BuscarCiudad 
          type="text"
          id='ciudad'
          name='ciudad' 
          onChange={datosBusqueda}
          value={ciudad}
          />
      </Label>
      <Label htmlFor="pais">
        <Select name="pais"
         id="pais"
         onChange={datosBusqueda}
         value={pais}
         >
        <option value=""> Seleciones</option>
        <option value="VE">Venezuela</option>
        <option value="US">Estados Unidos</option>
        <option value="MX">México</option>
         <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="RU">Rusia</option>
          <option value="ES">España</option>
          <option value="DE">Alemania</option>
          <option value="JP">Japon</option>         

         </Select>
      </Label>
      <Input
          type="submit" 
          value="Obtener Clima"
        ></Input>
      </form>
    </>
  )
}

export default Formulario
