import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { menu } from '../../../libs/menu';

function useNative() {
  const history = useHistory();
  const [native] = useState(history.location.pathname.substring(1));

  const onMenu = (divide: string) => {
    let menu = '';

    switch (menu) {
      case 'soldier':
        return (menu = '현역');
      case 'reserve':
        return (menu = '예비역');
      case 'general':
        return (menu = '일반');
    }

    history.push(`/menu?native=${menu}&divide=${divide}`);
  };

  return {
    menu,
    native,
    onMenu,
  };
}

export default useNative;
