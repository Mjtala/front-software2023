import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { BrowserRouter as Redirect } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import Perfil from "./components/ViewJugador/Perfil";
import PerfilEmpresa from "./components/ViewEmpresa/PerfilEmpresa";
import SearchField from './components/SearchField/SearchField';
import ParticularField from './components/ParticularField/ParticularField';
import LoginJugador from './pages/Login/LoginJugador';
import LoginEmpresa from './pages/Login/LoginEmpresa';
import ChooseUser from './pages/Login/ChooseUser';
import ChooseAccount from './pages/SignUp/ChooseAccount';
import SignUpJugador from './pages/SignUp/SignUpJugador';
import SignUpEmpresa from './pages/SignUp/SignUpEmpresa';

function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/perfil_jugador" element={<Perfil />} />
                <Route path="/perfil_empresa" element={<PerfilEmpresa />} />
                <Route path={'/buscar_cancha'} element={<SearchField/>}/>
                <Route path={"/canchas/:name"} element={<ParticularField/>} />
                <Route path="/LoginJugador" element={<LoginJugador />}/>
                <Route path="/LoginEmpresa" element={<LoginEmpresa />}/>
                <Route path="/ChooseUser" element={<ChooseUser />}/>
                <Route path="/ChooseAccount" element={<ChooseAccount />}/>
                <Route path="/SignUpJugador" element={<SignUpJugador />}/>
                <Route path="/SignUpEmpresa" element={<SignUpEmpresa />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;