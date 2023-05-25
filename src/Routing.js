import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>  
                <Route path="/" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;