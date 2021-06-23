import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ListUsers from '../../components/users/ListUsers';
import useListUsers from './hooks/useListUsers';

function ListUsersPage() {
  const { users, search, onChange, onSearch, onKeyPress, onDetail, loading, error } =
    useListUsers();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ListUsers
        users={users}
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
        onDetail={onDetail}
      />
    </PageTemplate>
  );
}

export default ListUsersPage;
