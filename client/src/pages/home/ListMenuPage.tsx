import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListMenu from '../../components/home/ListMenu';
import useListMenu from './hooks/useListMenu';

function ListMenuPage() {
  const { menu, onBack, onMenu, loading, error } = useListMenu();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListMenu menu={menu} onBack={onBack} onMenu={onMenu} />
    </PageTemplate>
  );
}

export default ListMenuPage;
