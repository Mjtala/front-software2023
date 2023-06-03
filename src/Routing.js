import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import Perfil from "./components/ViewJugador/Perfil";
import PerfilEmpresa from "./components/ViewEmpresa/PerfilEmpresa";
function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>  
                <Route path="/" element={<HomeView />} />
                <Route path="/perfil_jugador" element={<Perfil />} />
                <Route path="/perfil_empresa" element={<PerfilEmpresa />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;