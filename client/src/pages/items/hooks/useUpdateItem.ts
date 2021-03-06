import { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { READ_ITEM, UPDATE_ITEM } from '../../../libs/graphql/items';

function useUpdateItem() {
  const history = useHistory();
  const { itemId }: { itemId: string } = useParams();
  const { data, loading, error } = useQuery<{ ReadItem: { item: ItemType } }>(READ_ITEM, {
    variables: { id: itemId },
  });
  const [inputs, setInputs] = useState({
    name: '',
    divide: '',
    native: '',
    unit: '',
    price: '',
  });
  const { name, divide, native, unit, price } = inputs;
  const [UpdateItem, { client }] = useMutation(UPDATE_ITEM);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { value, name } = e.target;

      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await UpdateItem({
        variables: {
          id: itemId,
          name,
          divide,
          native,
          unit,
          price: parseInt(price),
        },
      });

      if (!response || !response.data) return;

      await client?.clearStore();

      toast.success('품목 수정 완료');
      history.goBack();
    } catch (err) {
      toast.error(err);
    }
  };

  const onBack = () => {
    history.push(`/item/${itemId}`);
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  useEffect(() => {
    if (data?.ReadItem.item) {
      setInputs({
        name: data.ReadItem.item.name,
        divide: data.ReadItem.item.divide,
        native: data.ReadItem.item.native,
        unit: data.ReadItem.item.unit,
        price: data.ReadItem.item.price.toString(),
      });
    }
  }, [data, setInputs]);

  return {
    name,
    divide,
    native,
    unit,
    price,
    onChange,
    onSubmit,
    onBack,
    onKeyPress,
    loading,
    error,
  };
}

export default useUpdateItem;
