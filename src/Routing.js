import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import SearchField from './components/SearchField/SearchField';

function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
                <Route path="/" element={<HomeView />} />
            <Routes>
                <Route path={'/search'} element={<SearchField/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;