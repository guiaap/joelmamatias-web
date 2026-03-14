import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

export default function MainLayout() {

    return (

    <div className="
      max-w-(--master-container) 
      mx-auto 
      bg-(--primary-background)
      shadow-lg
      font-dm
      ">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </div>

    );
}