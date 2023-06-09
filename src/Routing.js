import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar'
import HomeView from "./pages/HomeView/HomeView";
import PlayerProfile from "../src/pages/ViewPlayer/PlayerProfile"
import CompanyProfile from "../src/pages/ViewCompany/CompanyProfile"
import LoginPlayer from './pages/Login/LoginPlayer';
import LoginCompany from './pages/Login/LoginCompany';
import ChooseUser from './pages/Login/ChooseUser';
import ChooseAccount from './pages/SignUp/ChooseAccount';
import SignUpPlayer from './pages/SignUp/SignUpPlayer';
import SignUpCompany from './pages/SignUp/SignUpCompany';
import SearchField from './components/SearchField/SearchField';
import ParticularField from './components/ParticularField/ParticularField';
import AdminHomePage from './pages/AdminViews/AdminHomePage';
import EditField from './components/ViewCompany/EditField';
import NotFoundpage from './pages/NotFound/NotFoundpage';





function Routing() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/perfil_jugador" element={<PlayerProfile />} />
                <Route path="/perfil_empresa" element={<CompanyProfile />} />
                <Route path={'/buscar_cancha'} element={<SearchField />} />
                <Route path={"/canchas/:id"} element={<ParticularField />} />
                <Route path={"/editar_cancha/:id"} element={<EditField />} />
                <Route path="/iniciar_sesion_jugador" element={<LoginPlayer />} />
                <Route path="/iniciar_sesion_empresa" element={<LoginCompany />} />
                <Route path="/elegir_usuario" element={<ChooseUser />} />
                <Route path="/elegir_cuenta" element={<ChooseAccount />} />
                <Route path="/registrar_jugador" element={<SignUpPlayer />} />
                <Route path="/registrar_empresa" element={<SignUpCompany />} />
                <Route path="/perfil_admin" element={<AdminHomePage />} />
                <Route path="*" element={<NotFoundpage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;