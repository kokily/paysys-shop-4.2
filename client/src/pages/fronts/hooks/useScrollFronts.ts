import { useQuery } from '@apollo/client';
import { useCallback, useState } from 'react';
import { LIST_BILLS } from '../../../libs/graphql/bills';
import useScroll from '../../../libs/hooks/useScroll';

function useScrollFronts(title?: string, user_id?: string, hall?: string) {
  const { data, loading, error, fetchMore } = useQuery<{
    ListBills: { bills: BillType[] };
  }>(LIST_BILLS, {
    variables: { title, user_id, hall },
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor: string) => {
      fetchMore({
        variables: {
          title,
          user_id,
          hall,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListBills.bills.length === 0) {
            setIsFinished(true);
          }

          return {
            ListBills: {
              ...prev.ListBills,
              bills: [...prev.ListBills.bills, ...fetchMoreResult.ListBills.bills],
            },
          };
        },
      });
    },
    [title, user_id, hall, fetchMore]
  );

  const cursor = data?.ListBills.bills[data.ListBills.bills.length - 1]?.id;

  useScroll({
    cursor,
    onLoadMore,
  });

  return {
    data,
    loading,
    error,
    isFinished,
  };
}

export default useScrollFronts;
