import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import qs from 'qs';
import { LIST_ITEMS } from '../../../libs/graphql/items';

interface QueryType {
  native?: string;
  divide?: string;
}

function useListMenu() {
  const history = useHistory();
  const location = useLocation();
  const [native, setNative] = useState<string>('');
  const [divide, setDivide] = useState<string>('');

  const { data, loading, error } = useQuery<{
    ListItems: { items: ItemType[] };
  }>(LIST_ITEMS, {
    variables: { native, divide },
  });

  const onBack = () => {
    history.goBack();
  };

  const onMenu = (id: string) => {
    history.push(`/menu/${id}`);
  };

  useEffect(() => {
    const { native, divide }: QueryType = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    if (native) setNative(native);
    if (divide) setDivide(divide);
  }, [location.search]);

  return {
    menu: data?.ListItems.items || [],
    onBack,
    onMenu,
    loading,
    error,
  };
}

export default useListMenu;
