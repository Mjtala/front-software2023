import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import LoginJugador from './pages/Login/LoginJugador';
import LoginEmpresa from './pages/Login/LoginEmpresa';
import ChooseUser from './pages/Login/ChooseUser';

function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>  
                <Route path="/" element={<HomeView />} />
                <Route path="/LoginJugador" element={<LoginJugador />}/>
                <Route path="/LoginEmpresa" element={<LoginEmpresa />}/>
                <Route path="/ChooseUser" element={<ChooseUser />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;