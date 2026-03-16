import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MainLayout from "./components/MainLayout.jsx";
import PostLayout from "./components/PostLayout.jsx";
import BlogPost from "./pages/BlogPost.jsx"

export default function App() {

  return (
   
    <Routes>

      <Route element={<MainLayout />} >
        <Route path="/" element={<Home />} />
      </Route>

      <Route element={<PostLayout />}>
        <Route path="/blogpost/:id" element={<BlogPost />}></Route>
      </Route>

    </Routes>
 
  );
}


