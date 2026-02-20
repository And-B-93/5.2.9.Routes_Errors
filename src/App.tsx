import Vacancies from "./pages/Vacancies";
import { Header } from "./components/Header";
import { DescriptionVacancy } from "./pages/DescriptionVacancy";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  return (
    <>
      <HashRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/vacancies/moscow" replace />}
          />
          <Route path="/vacancies/moscow" element={<Vacancies />} />
          <Route path="/vacancies/petersburg" element={<Vacancies />} />
          <Route path="/vacancies/:id" element={<DescriptionVacancy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
