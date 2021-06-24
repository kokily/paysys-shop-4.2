import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../../libs/styles';
import ExpenseButton from './ExpenseButton';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 6rem;
  ${shadow(1)}
  animation: 0.2s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  font-size: 1.512rem;
  color: ${oc.violet[7]};
`;

const Content = styled.div`
  text-align: center;

  table {
    font-size: 0.95rem;
  }
  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border: 1px solid ${oc.gray[4]};
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: ${oc.violet[4]};
    color: white;
    width: 130px;
    &.basic {
      width: 93.3px;
    }
    &.orange {
      background: ${oc.orange[4]};
    }
    &.cyan {
      background: ${oc.cyan[4]};
    }
    &.red {
      background: ${oc.red[4]};
    }
  }
  td {
    width: 100px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.blue[9]};
      font-weight: bold;
    }
  }
`;

interface Props {
  edit?: boolean;
  onBack: () => void;
  onSubmit: (e: React.MouseEvent) => void;
}

const ExpenseTemplate: React.FC<Props> = ({ children, edit, onBack, onSubmit }) => {
  return (
    <Container>
      <Title>웨딩 정산 {edit ? '수정' : '작성'}</Title>

      <Content>{children}</Content>

      <ExpenseButton onBack={onBack} onSubmit={onSubmit} />
    </Container>
  );
};

export default ExpenseTemplate;
