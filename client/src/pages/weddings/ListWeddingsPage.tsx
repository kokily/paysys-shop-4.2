import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListWeddings from '../../components/weddings/ListWeddings';
import useListWeddings from './hooks/useListWeddings';

function ListWeddingsPage() {
  const { weddings, search, onChange, onSearch, onKeyPress, onDetail, loading, error } =
    useListWeddings();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListWeddings
        weddings={weddings}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetail={onDetail}
      />
    </PageTemplate>
  );
}

export default ListWeddingsPage;
