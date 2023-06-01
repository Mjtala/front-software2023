import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
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