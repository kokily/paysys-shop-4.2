import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../../libs/styles';
import ReadButton from '../ReadWeddingButton';
import RemoveModal from '../../../common/RemoveModal';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    strong {
      color: ${oc.cyan[7]};
    }
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: ${oc.violet[7]};
`;

const Content = styled.div`
  margin-bottom: 2rem;
  align-self: center;
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

const ReadWeddingMobileTemplate: React.FC<Props> = ({
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

      <Content>{children}</Content>

      <ReadButton
        onList={onList}
        onBack={onBack}
        onRemoveClick={onRemoveClick}
        onUpdate={onUpdate}
      />

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default ReadWeddingMobileTemplate;
