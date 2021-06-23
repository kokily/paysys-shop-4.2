import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ReadUser from '../../components/users/ReadUser';
import useReadModal from './hooks/useReadModal';
import useReadUser from './hooks/useReadUser';

function ReadUserPage() {
  const { user, onBack, onSetAdmin, onSetEmployee, onInitPassword, loading, error } =
    useReadUser();
  const { modal, onRemoveClick, onCancel, onConfirm } = useReadModal();

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <ReadUser
        user={user}
        onBack={onBack}
        onSetAdmin={onSetAdmin}
        onSetEmployee={onSetEmployee}
        onInitPassword={onInitPassword}
        modal={modal}
        onRemoveClick={onRemoveClick}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </PageTemplate>
  );
}

export default ReadUserPage;
