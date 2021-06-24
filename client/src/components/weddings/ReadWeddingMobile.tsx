import React from 'react';
import SignRemoveModal from './common/sign/SignRemoveModal';
import SignModal from './common/sign/SignModal';

interface Props {
  wedding: WeddingType | null;
  onRemoveSign: () => void;
  visibleHusband: boolean;
  titleHusband: string;
  onCancelHusband: () => void;
  onConfirmHusband: () => void;
  visibleBride: boolean;
  titleBride: string;
  onCancelBride: () => void;
  onConfirmBride: () => void;
}

const ReadWeddingMobile: React.FC<Props> = ({
  wedding,
  onRemoveSign,
  visibleHusband,
  titleHusband,
  onCancelHusband,
  onConfirmHusband,
  visibleBride,
  titleBride,
  onCancelBride,
  onConfirmBride,
}) => {
  return (
    <>
      {wedding && (
        <>
          <h3 className="name">
            신랑님: <strong>{wedding.husband_name}</strong>{' '}
            <strong style={{ color: 'pink' }}>♡</strong> 신부님:{' '}
            <strong>{wedding.bride_name}</strong>
          </h3>

          {(wedding.husband_image || wedding.bride_image) && (
            <SignRemoveModal
              husband={wedding.husband_image || undefined}
              bride={wedding.bride_image || undefined}
              onRemoveSign={onRemoveSign}
            />
          )}

          <h4>
            웨딩일시: {new Date(wedding.wedding_at).toLocaleDateString()}
            {wedding.event_at}
          </h4>

          <SignModal
            visible={visibleHusband}
            title={titleHusband}
            onCancel={onCancelHusband}
            onConfirm={onConfirmHusband}
          />
          <SignModal
            visible={visibleBride}
            title={titleBride}
            onCancel={onCancelBride}
            onConfirm={onConfirmBride}
          />

          <hr style={{ width: '90%' }} />

          <h3>웨딩비용</h3>
        </>
      )}
    </>
  );
};

export default ReadWeddingMobile;
