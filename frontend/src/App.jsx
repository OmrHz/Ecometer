import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, createTheme } from "@mui/material/styles"; // Import ThemeProvider and createTheme
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
import Home from "./landingPage/Home";
import Login from "./logIn/Login";
import Signup from "./signUp/Signup";
import Calculateur from "./Auth/Pages/Calculateur.jsx";
import Acceuil from "./Auth/Pages/Accueil.jsx";
import Rapport from "./Auth/Pages/Rapport.jsx";
import Forgetpassword from "./logIn/Forgetpassword.jsx";
import Verf from "./logIn/Verf.jsx";

import "./App.css";
import Utilisateurs from "./admin/pages/Utilisateurs.jsx";
import Basededonnees from "./admin/pages/Basededonnees.jsx";

function App() {
  const isConnected = localStorage.getItem("isConnected"); // Gérer l'état de connexion ici
  const verifiedEmail = localStorage.getItem("verifiedEmail"); // Gérer l'état de vérification de l'email ici
  // Define your Material-UI theme
  const theme = createTheme({
    // Add your theme configuration here
    // For example:
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#dc004e",
      },
    },
  });
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/acceuil"
                element={isConnected ? <Acceuil /> : <Navigate to="/login" />}
              />
              <Route path="/calculateur" element={<Calculateur />} />
              <Route path="/rapport" element={<Rapport />} />
              <Route path="/admin/utilisateurs" element={<Utilisateurs />} />
              <Route path="/admin/bdd" element={<Basededonnees />} />
              <Route path="/forgetpassword" element={<Forgetpassword />} />
              <Route path="/verf" element={<Verf />} />
            </Routes>
          </ThemeProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;