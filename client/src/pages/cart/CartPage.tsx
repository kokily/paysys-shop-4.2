import Cart from '../../components/cart/Cart';
import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import useCart from './hooks/useCart';
import useRemoveModal from './hooks/useRemoveModal';

function CartPage() {
  const {
    title,
    hall,
    etc,
    cart,
    onChange,
    totalAmount,
    onRemoveOne,
    onSubmit,
    loading,
    error,
  } = useCart();
  const { modal, onRemoveClick, onCancel, onConfirm } = useRemoveModal();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <Cart
        title={title}
        hall={hall}
        etc={etc}
        cart={cart}
        onChange={onChange}
        totalAmount={totalAmount}
        onRemoveOne={onRemoveOne}
        onSubmit={onSubmit}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
}

export default CartPage;
