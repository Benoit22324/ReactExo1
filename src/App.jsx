import "./assets/css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Home"
import { Users } from "./components/Users"

export const App = () => {

    return <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/users" Component={Users} />
            </Routes>
        </BrowserRouter>
    </>
}