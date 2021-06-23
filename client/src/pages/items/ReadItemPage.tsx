import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ReadItem from '../../components/items/ReadItem';
import useReadItem from './hooks/useReadItem';
import useReadModal from './hooks/useReadModal';

function ReadItemPage() {
  const { item, onList, onEdit, loading, error } = useReadItem();
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ReadItem
        item={item}
        onList={onList}
        onEdit={onEdit}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
}

export default ReadItemPage;
