import { useContext } from "react";
import ClimaContext from "../context/ProviderClima";

const useClima = () =>{
    return useContext (ClimaContext)
}

export default useClima