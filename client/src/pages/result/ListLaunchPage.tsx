import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListLaunch from '../../components/result/ListLaunch';
import useListLaunch from './hooks/useListLaunch';

function ListLaunchPage() {
  const { data, loading, error } = useListLaunch();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListLaunch
        launches={data?.ListLaunch.launches || []}
        salmon={data?.ListLaunch.salmon || null}
        eel={data?.ListLaunch.eel || null}
        flesh={data?.ListLaunch.flesh || null}
      />
    </PageTemplate>
  );
}

export default ListLaunchPage;
