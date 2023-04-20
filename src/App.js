import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import CreateRecipe from "./pages/createRecipe";
import SavedRecipe from "./pages/savedRecipe";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer position="top-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-recipe" element={<CreateRecipe />} />
        <Route path="/saved-recipe" element={<SavedRecipe />} />
      </Routes>
    </Router>
  );
}

export default App;
