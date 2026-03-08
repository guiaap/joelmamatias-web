import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MainLayout from "./components/MainLayout.jsx";

export default function App() {

  return (
   
    <Routes>
      <Route element={<MainLayout />} >
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>

    
  );
}


