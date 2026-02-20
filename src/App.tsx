import Vacancies from "./pages/Vacancies";
import { Header } from "./components/Header";
import { DescriptionVacancy } from "./pages/DescriptionVacancy";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Navigate to="/vacancies/moscow" replace />} />
        <Route path="/vacancies">
          <Route path="moscow" element={<Vacancies />} />
          <Route path="petersburg" element={<Vacancies />} />
          <Route path=":id" element={<DescriptionVacancy />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Route>,
    ),
    {
      basename: "/5.2.9.Routes_Errors",
    },
  );

  return (
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
