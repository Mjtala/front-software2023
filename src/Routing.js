import { BrowserRouter, Route, Routes} from 'react-router-dom';
import SearchField from './components/SearchField';

function Routing(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path={'/search'} element={<SearchField/>}/>         
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;