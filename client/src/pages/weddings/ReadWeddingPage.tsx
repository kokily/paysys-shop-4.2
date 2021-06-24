import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { BrowserView, MobileView } from 'react-device-detect';
import { brideSign, husbandSign } from '../../libs/store/recoil';
import useReadModal from './hooks/useReadModal';
import useReadWedding from './hooks/useReadWedding';
import useSignBride from './hooks/useSignBride';
import useSignHusband from './hooks/useSignHusband';
import Loading from '../../components/common/Loading';
import PageTemplate from '../../components/common/PageTemplate';
import ReadWeddingLeft from '../../components/weddings/common/ReadWeddingLeft';
import ReadWeddingMobileTemplate from '../../components/weddings/common/mobile/ReadWeddingMobileTemplate';
import ReadWeddingRight from '../../components/weddings/common/ReadWeddingRight';
import ReadWeddingTemplate from '../../components/weddings/common/ReadWeddingTemplate';
import ReadWedding from '../../components/weddings/ReadWedding';
import ReadWeddingMobile from '../../components/weddings/ReadWeddingMobile';
import ReadWeddingMobileTop from '../../components/weddings/common/mobile/ReadWeddingMobileTop';
import ReadWeddingMobileBottom from '../../components/weddings/common/mobile/ReadWeddingMobileBottom';

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
  const { visibleHusband, titleHusband, onCancelHusband, onConfirmHusband } =
    useSignHusband();
  const { visibleBride, titleBride, onCancelBride, onConfirmBride } = useSignBride();
  const husband = useRecoilValue(husbandSign);
  const bride = useRecoilValue(brideSign);

  useEffect(() => {
    refetch();
  }, [husband, bride, refetch]);

  if (loading) return <Loading />;
  if (error) return null;

  return (
    <PageTemplate>
      <BrowserView>
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
          <ReadWeddingRight
            wedding={wedding}
            meal={meal}
            present={present}
            reserve={reserve}
          />
        </ReadWeddingTemplate>
      </BrowserView>
      <MobileView>
        <ReadWeddingMobileTemplate
          onList={onList}
          onBack={onBack}
          onUpdate={onUpdate}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
        >
          <ReadWeddingMobile
            wedding={wedding}
            onRemoveSign={onRemoveSign}
            visibleHusband={visibleHusband}
            titleHusband={titleHusband}
            onCancelHusband={onCancelHusband}
            onConfirmHusband={onConfirmHusband}
            visibleBride={visibleBride}
            titleBride={titleBride}
            onCancelBride={onCancelBride}
            onConfirmBride={onConfirmBride}
          />
          <ReadWeddingMobileTop
            wedding={wedding}
            convention={convention}
            company={company}
            event={event}
            hanbok={hanbok}
          />
          <ReadWeddingMobileBottom
            wedding={wedding}
            meal={meal}
            present={present}
            reserve={reserve}
          />
        </ReadWeddingMobileTemplate>
      </MobileView>
    </PageTemplate>
  );
}

export default ReadWeddingPage;
