import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ReadFront from '../../components/fronts/ReadFront';
import useReadFront from './hooks/useReadFront';
import useReadModal from './hooks/useReadModal';

function ReadFrontPage() {
  const {
    front,
    user,
    onList,
    onRestore,
    onReserve,
    onRemoveReserve,
    loading,
    meLoading,
    error,
  } = useReadFront();
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

  if (loading) return <Loading />;
  if (meLoading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ReadFront
        front={front}
        user={user}
        onList={onList}
        onRestore={onRestore}
        onReserve={onReserve}
        onRemoveReserve={onRemoveReserve}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
}

export default ReadFrontPage;
