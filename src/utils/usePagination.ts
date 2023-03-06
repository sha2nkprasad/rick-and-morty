import { NumberParam, useQueryParam, withDefault } from 'use-query-params';

const usePagination = (param?: string) => {
  const [page, setPageParam] = useQueryParam(param || 'page', withDefault(NumberParam, 1));

  const setPage = (nextPage: number) => {
    setPageParam(nextPage);
  };

  const resetPage = () => {
    setPageParam(1);
  };

  return {
    page,
    setPage,
    resetPage,
  };
};

export default usePagination;
