import PageTemplate from '../../components/common/PageTemplate';
import Reserve from '../../components/fronts/Reserve';
import useReserve from './hooks/useReserve';

function AddReservePage() {
  const { reserve, onChange, onSubmit, onKeyPress } = useReserve();

  return (
    <PageTemplate>
      <Reserve
        reserve={reserve}
        onChange={onChange}
        onSubmit={onSubmit}
        onKeyPress={onKeyPress}
      />
    </PageTemplate>
  );
}

export default AddReservePage;
