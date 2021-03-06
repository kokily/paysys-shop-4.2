import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media, shadow } from '../../libs/styles';
import Button from '../common/Button';
import RemoveModal from '../common/RemoveModal';

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
  .header {
    h2 {
      font-size: 1.712rem;
    }
  }
  .content {
    position: relative;
    width: 300px;
    margin: 36px auto;
    padding: 1rem;
    background: white;
    border-radius: 5px;
    overflow: hidden;
    ${shadow(1)};
    .table {
      width: 100%;
      padding: 0;
      border-radius: 0.8rem;
      overflow: hidden;
    }
    tr:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    th,
    td {
      padding-top: 1rem;
      padding-bottom: 1rem;
      text-align: center;
    }
    th {
      background: ${oc.indigo[9]};
      color: white;
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

const ButtonBox = styled.div`
  display: contents;
  margin-top: 1rem;
  ${media.large} {
    width: 1200px;
    padding-left: 15rem;
    padding-right: 15rem;
  }
`;

interface Props {
  item: ItemType | null;
  onList: () => void;
  onEdit: () => void;
  modal: boolean;
  onRemoveClick: () => void;
  onCancel: () => void;
  onConfirm: () => void;
}

const ReadItem: React.FC<Props> = ({
  item,
  onList,
  onEdit,
  modal,
  onRemoveClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <Container>
      <WhiteBoard>
        <div className="header">
          <h2>품목 상세보기</h2>
        </div>

        <DownBorder />

        <ButtonBox>
          <Button submit onClick={onList}>
            목록
          </Button>
          <Button edit onClick={onEdit}>
            수정
          </Button>
          <Button cancel onClick={onRemoveClick}>
            삭제
          </Button>
        </ButtonBox>

        <div className="content">
          <table className="table">
            <tbody>
              {item && (
                <>
                  <tr>
                    <th>품명</th>
                    <td>{item.name}</td>
                  </tr>
                  <tr>
                    <th>출 신</th>
                    <td>{item.native}</td>
                  </tr>
                  <tr>
                    <th>구 분</th>
                    <td>{item.divide}</td>
                  </tr>
                  <tr>
                    <th>단 위</th>
                    <td>{item.unit}</td>
                  </tr>
                  <tr>
                    <th>단 가</th>
                    <td>
                      {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </WhiteBoard>

      <RemoveModal visible={modal} onCancel={onCancel} onConfirm={onConfirm} />
    </Container>
  );
};

export default ReadItem;
