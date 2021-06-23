import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import UpdateItem from '../../components/items/UpdateItem';
import useUpdateItem from './hooks/useUpdateItem';

function UpdateItemPage() {
  const {
    name,
    divide,
    native,
    unit,
    price,
    onChange,
    onSubmit,
    onBack,
    onKeyPress,
    loading,
    error,
  } = useUpdateItem();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <UpdateItem
        name={name}
        divide={divide}
        native={native}
        unit={unit}
        price={price}
        onChange={onChange}
        onSubmit={onSubmit}
        onBack={onBack}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
}

export default UpdateItemPage;
