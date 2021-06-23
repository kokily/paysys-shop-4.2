import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { BrowserView, MobileView } from 'react-device-detect';
import { media } from '../../libs/styles';
import ReadHeader from './read/ReadHeader';
import ReadTable from './read/ReadTable';
import ReadTotal from './read/ReadTotal';
import ReadButton from './common/ReadButtont';
import RemoveModal from '../common/RemoveModal';
import ReadMobileHeader from './mobile/ReadMobileHeader';
import ReadMobileTable from './mobile/ReadMobileTable';
import ReadMobileTotal from './mobile/ReadMobileTotal';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WhiteBoard = styled.div`
  width: 80%;
  ${media.xsmall} {
    width: 100%;
  }
`;

const Content = styled.div``;

const EtcPane = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  span {
    width: 100%;
    color: ${oc.indigo[9]};
    padding: 15px;
    background-color: ${oc.indigo[1]};
    border-color: ${oc.indigo[2]};
    border: 1px solid transparent;
    border-radius: 4px;
  }
`;

interface Props {
  front: BillType | null;
  user: MeType | null;
  onList: () => void;
  onRestore: () => Promise<void>;
  onReserve: () => void;
  onRemoveReserve: () => Promise<void>;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadFront: React.FC<Props> = ({
  front,
  user,
  onList,
  onRestore,
  onReserve,
  onRemoveReserve,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      {front && user && (
        <WhiteBoard>
          <>
            <BrowserView>
              <ReadHeader front={front} />
            </BrowserView>
            <MobileView>
              <ReadMobileHeader front={front} />
            </MobileView>
          </>

          <Content>
            <>
              <BrowserView>
                <ReadTable front={front} />
              </BrowserView>
              <MobileView>
                <ReadMobileTable front={front} />
              </MobileView>
            </>

            {front.etc !== '' && front.etc !== ' ' && (
              <>
                <hr />
                <EtcPane>
                  <span>기타사항 : {front.etc}</span>
                </EtcPane>
              </>
            )}

            <hr />

            <>
              <BrowserView>
                <ReadTotal front={front} />
              </BrowserView>
              <MobileView>
                <ReadMobileTotal front={front} />
              </MobileView>
            </>

            <ReadButton
              front={front}
              user={user}
              onRemoveClick={onRemoveClick}
              onRestore={onRestore}
              onList={onList}
              onReserve={onReserve}
              onRemoveReserve={onRemoveReserve}
            />
          </Content>
        </WhiteBoard>
      )}

      <RemoveModal visible={modal} onConfirm={onConfirm} onCancel={onCancel} />
    </Container>
  );
};

export default ReadFront;
