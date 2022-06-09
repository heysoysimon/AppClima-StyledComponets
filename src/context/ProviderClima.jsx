import { useState, createContext } from "react";
import axios from "axios";
const ClimaContext = createContext()

const ProviderClima = ({children}) => {

    const [busqueda, setBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }
    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [noResultado, setNoResultado] = useState(false)
    const consultarClima =  async datos =>{

        setCargando(true)
        setNoResultado(false)
        try {
            const { ciudad, pais } = datos

            const Id = import.meta.env.VITE_API_KEY

            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${Id}`

            
            const {data} = await axios(url)
            const { lat, lon } = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Id}`

            const { data: clima } = await axios(urlClima)
            console.log(clima)
            setResultado(clima)
           

            
        } catch (error) {

      /*   console.log(error) */
      setNoResultado('No hay resultados :(')
        } finally {
            setCargando(false)
        }

        
    }

    return(
        <ClimaContext.Provider
        value={{
        busqueda,
        datosBusqueda,
        consultarClima,
        cargando,
        resultado,
        noResultado

    }}
        >
            {children}
        </ClimaContext.Provider>
    )


}

export {
    ProviderClima
}

export default ClimaContext