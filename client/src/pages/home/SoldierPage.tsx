import PageTemplate from '../../components/common/PageTemplate';
import Native from '../../components/home/Native';
import useNative from './hooks/useNative';

function SoldierPage() {
  const { menu, native, onMenu } = useNative();

  return (
    <PageTemplate>
      <Native menu={menu} native={native} onMenu={onMenu} />
    </PageTemplate>
  );
}

export default SoldierPage;
