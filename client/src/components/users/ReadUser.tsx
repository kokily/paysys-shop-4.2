import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../libs/styles';
import ReadButton from './common/ReadButtont';
import ReadContent from './common/ReadContent';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding: 1rem;
  ${media.medium} {
    padding: 0.2rem;
  }
`;

const WhiteBoard = styled.div`
  ${shadow(1)};
  text-align: center;
  width: 80%;
  background: ${oc.indigo[1]};
  ${media.medium} {
    width: 100%;
  }
  header {
    h2 {
      font-size: 1.712rem;
    }
  }
`;

const DownBorder = styled.div`
  margin-left: 5rem;
  margin-right: 5rem;
  margin-bottom: 1rem;
  height: 3px;
  background: linear-gradient(to right, ${oc.teal[6]}, ${oc.indigo[5]});
  ${media.medium} {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;

interface Props {
  user: UserType | null;
  onBack: () => void;
  onSetAdmin: () => void;
  onSetEmployee: () => void;
  onInitPassword: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadUser: React.FC<Props> = ({
  user,
  onBack,
  onSetAdmin,
  onSetEmployee,
  onInitPassword,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <WhiteBoard>
        <div className="header">
          <h2>사용자 상세보기</h2>
        </div>

        <DownBorder />

        <ReadButton
          onBack={onBack}
          onAdmin={onSetAdmin}
          onEmployee={onSetEmployee}
          onInitPassword={onInitPassword}
          modal={modal}
          onRemoveClick={onRemoveClick}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />

        {user && <ReadContent user={user} />}
      </WhiteBoard>
    </Container>
  );
};

export default ReadUser;
