import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import TopTitle from '../../components/result/TopTitle';
import useTopTitle from './hooks/useTopTitle';

function TopTitlePage() {
  const { data, loading, error } = useTopTitle();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <TopTitle titles={data?.TopTitle.titles || []} />
    </PageTemplate>
  );
}

export default TopTitlePage;
