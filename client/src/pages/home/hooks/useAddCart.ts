import { useMutation, useQuery } from '@apollo/react-hooks';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ADD_CART } from '../../../libs/graphql/cart';
import { READ_ITEM } from '../../../libs/graphql/items';

function useAddCart() {
  const history = useHistory();
  const { menuId }: { menuId: string } = useParams();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const { data, loading, error } = useQuery<{
    ReadItem: { item: ItemType; ok: boolean };
  }>(READ_ITEM, {
    variables: { id: menuId },
  });

  const [AddCart, { client }] = useMutation(ADD_CART);

  const onChangeCount = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(parseInt(e.target.value));
  }, []);

  const onChangePrice = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(parseInt(e.target.value));
  }, []);

  const onBack = () => {
    history.goBack();
  };

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (count < 1 || price < 1) {
      toast.warning('단가 또는 수량을 입력하세요');
      return;
    }

    try {
      const response = await AddCart({
        variables: {
          item_id: menuId,
          price,
          count,
        },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('카트 추가');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (data?.ReadItem?.ok) {
      if (data.ReadItem.item.price !== 0) {
        setPrice(data.ReadItem.item.price);
      }
    }
  }, [data]);

  return {
    menu: data?.ReadItem.item || null,
    count,
    onChangeCount,
    price,
    onChangePrice,
    onBack,
    onSubmit,
    onKeyPress,
    loading,
    error,
  };
}

export default useAddCart;
