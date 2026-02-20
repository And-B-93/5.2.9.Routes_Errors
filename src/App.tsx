import Vacancies from "./pages/Vacancies";
import { Header } from "./components/Header";
import { DescriptionVacancy } from "./pages/DescriptionVacancy";
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route errorElement={<ErrorPage />}>
        <Route path="/" element={<Navigate to="/vacancies/moscow" replace />} />
        <Route path="/vacancies">
          <Route path="moscow" element={<Vacancies />} />
          <Route path="petersburg" element={<Vacancies />} />
          <Route path=":id" element={<DescriptionVacancy />} />
        </Route>
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
