import { Outlet } from "react-router";
import Navbar from "../Componets/Navbar";
import Footer from "../Componets/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default MainLayout;
