import { useQuery } from '@apollo/react-hooks';
import { toast } from 'react-toastify';
import { CHECK_ME } from '../../../libs/graphql/auth';

function usePageTemplate() {
  const { data, loading } = useQuery<{ CheckMe: { me: MeType | null } }>(CHECK_ME);

  const onLogout = async () => {
    try {
      localStorage.removeItem('paysys_token');
      document.location.href = '/';
    } catch (err) {
      toast.error(err);
    }
  };

  return {
    user: data?.CheckMe.me || null,
    loading,
    onLogout,
  };
}

export default usePageTemplate;
