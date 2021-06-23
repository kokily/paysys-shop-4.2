import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListItems from '../../components/items/ListItems';
import useListItems from './hooks/useListItems';

function ListItemsPage() {
  const { items, search, onChange, onSearch, onKeyPress, onDetail, loading, error } =
    useListItems();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListItems
        items={items}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetail={onDetail}
      />
    </PageTemplate>
  );
}

export default ListItemsPage;
