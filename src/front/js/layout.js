import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
//import { BackendURL } from "./component/backendURL";
//import Home from "../js/pages/home.js";
import { NavBar } from "./component/navBar";
import Footer from "./component/footer";
import injectContext from "./store/appContext";
import { Home } from "./pages/home";
import Profile from"./pages/profile";
import Register from "./pages/register"; // Importa el componente Register
import SignIn from "./pages/signIn"; // Importa el componente SignIn
import Single from "./pages/single"; // Importa el componente Single
import Workout from "./pages/workout"; // Importa el componente Workout
import WorkoutList from "./pages/workoutList"; // Importa el componente WorkoutList
import FormRegister from "./component/formRegister";
import FormSignIn from "./component/formSignIn";
import ProfileExperienceLevel from"./pages/profileExperienceLevel";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <NavBar /> {/* Descomentado para que el Navbar se muestre */}
                    <Routes>
                        <Route element={<Home />} path="/" /> 
                        <Route element={<Profile />} path="/profile" />
                        <Route element={<FormRegister />} path="/register/:theid" />
                        <Route element={<FormSignIn />} path="/singIn/:theid" />
                        <Route element={<Register />} path="/singIn/:theid" />
                        <Route element={<SignIn />} path="/singIn/:theid" />
                        <Route element={<Single />} path="/single/:theid" /> {/* Asegúrate de que esta ruta sea única */}
                        <Route element={<Workout />} path="/workout/:theid" /> 
                        <Route element={<WorkoutList />} path="/workoutList" /> 
                        <Route element={<ProfileExperienceLevel  />} path="/profileExperienceLevel" />
                        <Route element={<h1>Not found!</h1>} path="*" /> {/* Añadido path="*" */}
                    </Routes>  
                    <Footer /> {/* Descomentado para que el Footer se muestre */}
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
