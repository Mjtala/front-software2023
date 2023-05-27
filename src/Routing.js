import { BrowserRouter, Route, Routes} from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import HomeView from "./pages/HomeView/HomeView";
import SearchField from './components/SearchField/SearchField';
import ParticularField from './components/ParticularField/ParticularField';

function Routing(){

    return(
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path={'/search'} element={<SearchField/>}/>
                <Route path={"/fields/:name"} element={<ParticularField/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;