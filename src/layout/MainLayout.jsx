import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { useState } from "react";

export const MainLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALLE"); // 🔹 Flytter kategori state hertil

  return (
    <div>
      <Navigation setCategory={setSelectedCategory} /> {/* 🔹 Sender setCategory til Navigation */}
      <Outlet context={{ selectedCategory }} /> {/* 🔹 Giver kategorien videre til siderne */}
      <Footer />
    </div>
  );
};
