import { useQuery } from '@apollo/react-hooks';
import { useCallback, useState } from 'react';
import { LIST_ITEMS } from '../../../libs/graphql/items';
import useScroll from '../../../libs/hooks/useScroll';

function useScrollItems(name?: string) {
  const { data, loading, error, fetchMore } = useQuery<{
    ListItems: { items: ItemType[] };
  }>(LIST_ITEMS, {
    variables: { name },
  });
  const [isFinished, setIsFinished] = useState(false);

  const onLoadMore = useCallback(
    (cursor) => {
      fetchMore({
        variables: {
          name,
          cursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          if (fetchMoreResult.ListItems.items.length === 0) {
            setIsFinished(true);
          }

          return {
            ListItems: {
              ...prev.ListItems,
              items: [...prev.ListItems.items, ...fetchMoreResult.ListItems.items],
            },
          };
        },
      });
    },
    [name, fetchMore]
  );

  const cursor = data?.ListItems.items[data.ListItems.items.length - 1]?.id;

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

export default useScrollItems;
