import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

// En simpel layout fil. Alle pages vil blive renderet i Outlet,
// så vores nav altid ligger øverst og vores footer altid ligger nederst på siden.
export const MainLayout = () => {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};
