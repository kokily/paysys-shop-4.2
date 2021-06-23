import PageTemplate from '../../components/common/PageTemplate';
import AddItem from '../../components/items/AddItem';
import useAddItem from './hooks/useAddItem';

function AddItemPage() {
  const { name, divide, native, unit, price, onChange, onSubmit, onBack, onKeyPress } =
    useAddItem();

  return (
    <PageTemplate>
      <AddItem
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

export default AddItemPage;
