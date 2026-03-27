import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import WhatsappButton from "../ui/WhatsappButton.jsx";

export default function HomeLayout() {

    return (

      <div className="
          min-h-screen
          max-w-(--master-container) 
          mx-auto 
          overflow-x-hidden
          font-dm
          bg-(--primary-background)
          shadow-lg
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