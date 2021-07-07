import { useQuery } from '@apollo/react-hooks';
import { LIST_LAUNCH } from '../../../libs/graphql/result';

function useListLaunch() {
  const { data, loading, error } = useQuery<{
    ListLaunch: {
      launches: LaunchType[];
      salmon: LaunchMenuType;
      eel: LaunchMenuType;
      flesh: LaunchMenuType;
    };
  }>(LIST_LAUNCH);

  return {
    data,
    loading,
    error,
  };
}

export default useListLaunch;
