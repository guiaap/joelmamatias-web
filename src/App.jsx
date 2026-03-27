import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import Home from "./pages/home/Home.jsx";
import Post from "./pages/post/Post.jsx";

export default function App() {

  return (
   
    <Routes>

      <Route element={<Layout />} >

        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />

      </Route>

    </Routes>
 
  );
}


