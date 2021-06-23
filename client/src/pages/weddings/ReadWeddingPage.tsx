import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ReadWeddingLeft from '../../components/weddings/common/ReadWeddingLeft';
import ReadWeddingTemplate from '../../components/weddings/common/ReadWeddingTemplate';
import ReadWedding from '../../components/weddings/ReadWedding';
import useReadModal from './hooks/useReadModal';
import useReadWedding from './hooks/useReadWedding';

function ReadWeddingPage() {
  const {
    wedding,
    convention,
    company,
    event,
    hanbok,
    meal,
    present,
    reserve,
    onRemoveSign,
    onList,
    onBack,
    onUpdate,
    loading,
    error,
    refetch,
  } = useReadWedding();
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ReadWeddingTemplate
        onList={onList}
        onBack={onBack}
        onUpdate={onUpdate}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      >
        <ReadWedding wedding={wedding} onRemoveSign={onRemoveSign} />
        <ReadWeddingLeft
          wedding={wedding}
          convention={convention}
          company={company}
          event={event}
          hanbok={hanbok}
        />
      </ReadWeddingTemplate>
    </PageTemplate>
  );
}

export default ReadWeddingPage;
