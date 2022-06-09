import Formulario from "./Formulario"
import Resultado from "./Resultado"
import useClima from "../hooks/useClima"
import Spinner from "./Spinner"
import styled from "@emotion/styled"

const SinResultados = styled.h2`
  color:#fee440;
  font-weight: 100;
  font-size: 25px;

`

const AppClima = () => {

    const {resultado, cargando, noResultado} = useClima()
  return (
    <>
    <main>
        <Formulario/>

        { 
              cargando ? <Spinner/> : 
              resultado?.name ? <Resultado /> :
              noResultado ? <SinResultados>{noResultado}
              </SinResultados>
              : <p>El clima se va a mostrar aquí</p>
            }
            
        
    </main>
    </>
  )
}

export default AppClima
