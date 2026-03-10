import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout



() {

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
        <main className="[&>section]:py-10 [&>section]:px-5">
          <Outlet />
        </main>

    </div>

    );
}