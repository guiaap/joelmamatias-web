import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import WhatsappButton from "./WhatsappButton.jsx";

export default function MainLayout() {

    return (

    <div className="
      min-h-screen
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
        <WhatsappButton />

    </div>

    );
}