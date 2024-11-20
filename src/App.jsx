import "./assets/css/App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/J2/Navbar"
import { Home } from "./components/J2/Home"
import { Users } from "./components/J2/Users"
import { Posts } from "./components/Posts"
import { Post } from "./components/Post"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Count } from "./components/Count"
import { Counter } from "./components/Counter"

export const App = () => {

    return <>
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />

                <div>
                    <Counter />
                    <Count />
                </div>

                <Routes>
                    <Route path="/" Component={Home} />
                    <Route path="/users" Component={Users} />
                    <Route path="/posts" Component={Posts} />
                    <Route path="/post/:id" Component={Post} />
                </Routes>
            </BrowserRouter>
        </Provider>
    </>
}