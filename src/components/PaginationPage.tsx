import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { Group, Pagination } from "@mantine/core";
import { setPage } from "../reducers/fetchSlice";

const PaginationPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handlePageChange = (newPage: number) => {
    dispatch(setPage(newPage - 1));
  };
  const { totalPages, page } = useSelector((state: RootState) => state.fetch);
  return (
    <>
      {totalPages > 0 && (
        <Pagination.Root
          total={totalPages}
          onChange={handlePageChange}
          value={page + 1}
          style={{ margin: "24px" }}
        >
          <Group gap={5} justify="center">
            <Pagination.First />
            <Pagination.Previous />
            <Pagination.Items />
            <Pagination.Next />
            <Pagination.Last />
          </Group>
        </Pagination.Root>
      )}
    </>
  );
};

export { PaginationPage };
