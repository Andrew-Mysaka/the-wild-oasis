import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles.js";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Cabins from "./pages/Cabins.jsx";
import Bookings from "./pages/Bookings.jsx";

function App() {
    return (
        <>
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Navigate replace to={'dashboard'}/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                    <Route path={'/bookings'} element={<Bookings/>}/>
                    <Route path={'/cabins'} element={<Cabins/>}/>
                    <Route path={'/users'} element={<Users/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                    <Route path={'/account'} element={<Account/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>

    );
}

export default App;