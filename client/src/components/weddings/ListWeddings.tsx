import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import WeddingSearch from './common/WeddingSearch';

// Styles
const Container = styled.div`
  h2 {
    text-align: center;
  }
`;

const Content = styled.div`
  max-width: 600px;
  margin: 20px auto;
`;

const Table = styled.table`
  width: 100%;
  padding: 0;
  margin-bottom: 1.5rem;
  border-radius: 0.8rem;
  overflow: hidden;

  th,
  td {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }
  th {
    background: ${oc.violet[7]};
    color: white;
  }
  td {
    strong {
      color: ${oc.violet[7]};
      transition: 0.3s;
      overflow: hidden;
      padding: 0.3rem;
      border-radius: 6px;
      cursor: pointer;
      &:hover {
        background: ${oc.violet[7]};
        color: white;
      }
    }
    a {
      font-weight: bold;
      color: ${oc.violet[7]};
      &:hover {
        color: ${oc.red[7]};
      }
    }
  }
`;

interface Props {
  weddings: WeddingType[];
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: React.MouseEvent) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => void;
  onDetail: (id: string) => void;
}

const ListWeddings: React.FC<Props> = ({
  weddings,
  search,
  onChange,
  onSearch,
  onKeyPress,
  onDetail,
}) => {
  return (
    <Container>
      <h2>웨딩 빌지 리스트</h2>

      <WeddingSearch
        search={search}
        onChange={onChange}
        onSearch={onSearch}
        onKeyPress={onKeyPress}
      />

      <Content>
        <Table>
          <thead>
            <tr>
              <th>웨딩일자</th>
              <th>웨딩시간</th>
              <th>신랑</th>
              <th>신부</th>
            </tr>
          </thead>

          <tbody>
            {weddings && (weddings === null || weddings.length === 0) ? (
              <tr>
                <td colSpan={4}>데이터가 없습니다.</td>
              </tr>
            ) : (
              weddings.map((wedding) => (
                <tr key={wedding.id}>
                  <td>
                    <strong onClick={() => onDetail(wedding.id)}>
                      {wedding.wedding_at}
                    </strong>
                  </td>
                  <td>{wedding.event_at}</td>
                  <td>{wedding.husband_name}</td>
                  <td>{wedding.bride_name}</td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default ListWeddings;
