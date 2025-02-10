import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { Detailspage } from "./pages/Detailspage";

// React Router med et Layout element der Wrapper vores andre routes (inde i layout vises nav og footer)
// Vi har en Route der hedder /details/:articleID, hvor articleID er et query param. Vi kan trække det ud inde på details siden
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Frontpage />} />
          <Route path="/details/:articleID" element={<Detailspage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
