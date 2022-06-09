import styled from "@emotion/styled"
import {ProviderClima} from "./context/ProviderClima"

import AppClima from "./components/AppClima"

const Contenedor= styled.div`
  background: #b5179e;
  text-align: center;
  color: #fff;
  font-family: 'lato', sans-serif;
  padding: 20px;
  border-radius: 40px;
  max-width: 900px;
  margin: 0 auto;
  width: 90%;

  @media ( max-width: 600px){
   width: 70%;
  }
`
const Titulo = styled.h1 `
  text-align: center;
  font-weight: 200;
  font-family: 'lato', sans-serif;
  @media ( max-width: 600px){
    font-size: 20px;
  }

`
function App() {

  return (
    <>
     <ProviderClima>
     <Contenedor>
      <Titulo>
        Obten el clima de cualquier parte del mundo!
      </Titulo>
        <AppClima></AppClima>
      </Contenedor>


     </ProviderClima>
    </>
  )
}

export default App
