import { useQuery } from '@apollo/react-hooks';
import { TOP_TITLE } from '../../../libs/graphql/result';

function useTopTitle() {
  const { data, loading, error } =
    useQuery<{ TopTitle: { titles: TopTitleType[] } }>(TOP_TITLE);

  return {
    data,
    loading,
    error,
  };
}

export default useTopTitle;
