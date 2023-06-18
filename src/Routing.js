import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import PlayerProfile from "./components/ViewPlayer/PlayerProfile"
import CompanyProfile from "./components/ViewCompany/CompanyProfile"
import LoginPlayer from './pages/Login/LoginPlayer';
import LoginCompany from './pages/Login/LoginCompany';
import ChooseUser from './pages/Login/ChooseUser';
import ChooseAccount from './pages/SignUp/ChooseAccount';
import SignUpPlayer from './pages/SignUp/SignUpPlayer';
import SignUpCompany from './pages/SignUp/SignUpCompany';
import SearchField from './components/SearchField/SearchField';
import ParticularField from './components/ParticularField/ParticularField';
import React from 'react';


function Routing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/perfil_jugador" element={<PlayerProfile />} />
                <Route path="/perfil_empresa" element={<CompanyProfile />} />
                <Route path={'/buscar_cancha'} element={<SearchField />} />
                <Route path={"/canchas/:name"} element={<ParticularField />} />
                <Route path="/iniciar_sesion_jugador" element={<LoginPlayer />} />
                <Route path="/iniciar_sesion_empresa" element={<LoginCompany />} />
                <Route path="/elegir_usuario" element={<ChooseUser />} />
                <Route path="/elegir_cuenta" element={<ChooseAccount />} />
                <Route path="/registrar_jugador" element={<SignUpPlayer />} />
                <Route path="/registrar_empresa" element={<SignUpCompany />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;