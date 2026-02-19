import { Stack, Tabs } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import type { AppDispatch, RootState } from "../store/store";
import { setArea, setPage } from "../reducers/fetchSlice";
import { VacancyCard } from "./VacancyCard";
import { PaginationPage } from "./PaginationPage";
import { useEffect } from "react";

function TabsTown() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();

  const { vacancies } = useSelector((state: RootState) => state.fetch);

  const activeTab = () => {
    if (location.pathname.includes("/moscow")) return "moscow";
    if (location.pathname.includes("/petersburg")) return "petersburg";
    return "moscow";
  };

  const handleChange = (value: string | null) => {
    if (value === "moscow") {
      navigate("/vacancies/moscow");
    } else if (value === "petersburg") {
      navigate("/vacancies/petersburg");
    }
  };

  useEffect(() => {
    const active = activeTab();
    if (active === "moscow") {
      dispatch(setArea("1"));
    } else if (active === "petersburg") {
      dispatch(setArea("2"));
    }
    dispatch(setPage(0));
  }, [location.pathname]);

  return (
    <Tabs value={activeTab()} onChange={handleChange}>
      <Tabs.List>
        <Tabs.Tab value="moscow">Москва</Tabs.Tab>
        <Tabs.Tab value="petersburg">Санкт-Петербург</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="moscow">
        <Stack style={{ alignItems: "center", marginTop: "20px" }}>
          {vacancies.map((vacancy) => (
            <VacancyCard vacancy={vacancy} key={vacancy.id} />
          ))}

          <PaginationPage />
        </Stack>
      </Tabs.Panel>

      <Tabs.Panel value="petersburg">
        <Stack style={{ alignItems: "center", marginTop: "20px" }}>
          {vacancies.map((vacancy) => (
            <VacancyCard vacancy={vacancy} key={vacancy.id} />
          ))}
          <PaginationPage />
        </Stack>
      </Tabs.Panel>
    </Tabs>
  );
}

export { TabsTown };
