import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

import GlobalStyles from "./styles/GlobalStyles.js";
import Dashboard from "./pages/Dashboard.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Login from "./pages/Login.jsx";
import Account from "./pages/Account.jsx";
import Settings from "./pages/Settings.jsx";
import Users from "./pages/Users.jsx";
import Cabins from "./pages/Cabins.jsx";
import Bookings from "./pages/Bookings.jsx";
import AppLayout from "./ui/AppLayout.jsx";
import {Toaster} from "react-hot-toast";

const queryClient = new QueryClient({
    defaultOptions:{
        queries: {
            // staleTime: 60 * 1000,
            staleTime: 0,
        }
    }
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles/>
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout/>}>
                        <Route index element={<Navigate replace to={'dashboard'}/>}/>
                        <Route path={'/dashboard'} element={<Dashboard/>}/>
                        <Route path={'/bookings'} element={<Bookings/>}/>
                        <Route path={'/cabins'} element={<Cabins/>}/>
                        <Route path={'/users'} element={<Users/>}/>
                        <Route path={'/settings'} element={<Settings/>}/>
                        <Route path={'/account'} element={<Account/>}/>
                    </Route>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'*'} element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>

            <Toaster
                position={'top-center'}
                gutter={12}
                containerStyle={{margin: "8px"}}
                toastOptions={{
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                    style:{
                        fontSize: "16px" ,
                        maxWidth: "500px",
                        padding: "16px 24px",
                        backgroundColor: "var(--color-grey-0)",
                        color: "var(--color-grey-700)",
                    }
                }}
            />
        </QueryClientProvider>
    );
}

export default App;