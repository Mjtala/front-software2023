import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavigationBar from "./components/navBar/NavBar";
import HomeView from "./pages/HomeView/HomeView";
function Routing(){

    return(
        <BrowserRouter>
            <NavigationBar />
            <Routes>  
                <Route path="/" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;