import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListFronts from '../../components/fronts/ListFronts';
import useListFronts from './hooks/useListFronts';

function ListFrontsPage() {
  const {
    fronts,
    search,
    onChange,
    onSearch,
    onUserList,
    onHallList,
    onDetail,
    onKeyPress,
    loading,
    error,
  } = useListFronts();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListFronts
        fronts={fronts}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onUserList={onUserList}
        onHallList={onHallList}
        onDetail={onDetail}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
}

export default ListFrontsPage;
