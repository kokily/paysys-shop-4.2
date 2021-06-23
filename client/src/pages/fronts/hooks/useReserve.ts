import React, { useCallback, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import { ADD_RESERVE } from '../../../libs/graphql/reserve';

function useReserve() {
  const history = useHistory();
  const { frontId }: { frontId: string } = useParams();
  const [reserve, setReserve] = useState(0);

  const [AddReserve, { client }] = useMutation(ADD_RESERVE);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setReserve(parseInt(e.target.value));
  }, []);

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await AddReserve({
        variables: { bill_id: frontId, reserve },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('예약금 추가 완료');
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

  return {
    reserve,
    onChange,
    onSubmit,
    onKeyPress,
  };
}

export default useReserve;
