import useAddCart from './hooks/useAddCart';
import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import AddCart from '../../components/home/AddCart';

function AddCartPage() {
  const {
    menu,
    count,
    onChangeCount,
    price,
    onChangePrice,
    onBack,
    onSubmit,
    onKeyPress,
    loading,
    error,
  } = useAddCart();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <AddCart
        menu={menu}
        count={count}
        onChangeCount={onChangeCount}
        price={price}
        onChangePrice={onChangePrice}
        onBack={onBack}
        onSubmit={onSubmit}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
}

export default AddCartPage;
