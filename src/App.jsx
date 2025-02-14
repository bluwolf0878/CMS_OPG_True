import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { Frontpage } from "./pages/Frontpage";
import { Detailspage } from "./pages/Detailspage";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Frontpage />} />
            <Route path="/details/:articleID" element={<Detailspage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
