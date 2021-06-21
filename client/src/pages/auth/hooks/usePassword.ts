import { useMutation } from '@apollo/client';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { PASSWORD } from '../../../libs/graphql/auth';

function usePassword() {
  const history = useHistory();
  const [password, setPassword] = useState('');

  const [Password, { client }] = useMutation(PASSWORD);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const onSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    try {
      const response = await Password({
        variables: { password },
      });

      if (!response || !response.data) return;

      await client.clearStore();

      toast.success('비밀번호 변경 완료');
      history.push('/soldier');
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
    password,
    onChange,
    onSubmit,
    onKeyPress,
  };
}

export default usePassword;
