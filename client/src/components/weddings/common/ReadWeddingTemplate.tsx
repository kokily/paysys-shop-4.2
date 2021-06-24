import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';
import ReadWeddingButton from './ReadWeddingButton';
import RemoveModal from '../../common/RemoveModal';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 6rem;
  ${shadow(1)};
  animation: 0.3s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .name {
    text-align: center;
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: ${oc.violet[6]};
`;

interface Props {
  onList: () => void;
  onBack: () => void;
  onUpdate: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadWeddingTemplate: React.FC<Props> = ({
  onList,
  onBack,
  onUpdate,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
  children,
}) => {
  return (
    <Container>
      <Title>웨딩 정산 내역</Title>

      <div>{children}</div>

      <ReadWeddingButton
        onList={onList}
        onBack={onBack}
        onUpdate={onUpdate}
        onRemoveClick={onRemoveClick}
      />

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default ReadWeddingTemplate;
