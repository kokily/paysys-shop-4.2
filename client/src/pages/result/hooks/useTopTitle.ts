import { useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRecoilValue } from 'recoil';
import { TOP_TITLE } from '../../../libs/graphql/result';
import { StartTime, EndTime } from '../../../libs/store/recoil';

function useTopTitle() {
  const start_date = useRecoilValue(StartTime);
  const end_date = useRecoilValue(EndTime);
  const { data, loading, error, refetch } = useQuery<{
    TopTitle: { titles: TopTitleType[] };
  }>(TOP_TITLE, {
    variables: { start_date: start_date.date, end_date: end_date.date },
  });

  useEffect(() => {
    refetch();
  }, [start_date, end_date, refetch]);

  return {
    data,
    loading,
    error,
  };
}

export default useTopTitle;
