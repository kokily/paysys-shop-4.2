import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { media } from '../../libs/styles';
import { stringAccounting } from '../../libs/utils';

// Styles
const Container = styled.div`
  margin-top: 1rem;
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  ${media.xsmall} {
    width: 100%;
  }
  .table {
    width: 100%;
    padding: 0;
    border-radius: 0.8rem;
    overflow: hidden;
  }
  th,
  td {
    padding-top: 1rem;
    padding-bottom: 1rem;
    text-align: center;
    overflow: hidden;
  }
  th {
    min-width: 50px;
    background: ${oc.cyan[7]};
    color: white;
  }
  td {
    strong {
      color: ${oc.cyan[9]};
      transition: 0.3s;
      overflow: hidden;
      padding: 0.3rem;
      border-radius: 6px;
    }
  }
`;

const Result = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  border: 1px solid ${oc.cyan[6]};
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;

  td {
    padding: 0.5rem;
  }
`;

interface Props {
  launches: LaunchType[];
  salmon: LaunchMenuType | null;
  eel: LaunchMenuType | null;
  flesh: LaunchMenuType | null;
}

const ListLaunch: React.FC<Props> = ({ launches, salmon, eel, flesh }) => {
  return (
    <Container>
      <h2>도시락 판매 현황</h2>

      {salmon && eel && flesh && (
        <Result>
          <h3>도시락 통계</h3>

          <table>
            <thead>
              <tr>
                <th>구분</th>
                <th>연어정식</th>
                <th>장어덮밥</th>
                <th>제육정식</th>
                <th>계</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>판매비율</td>
                <td>
                  {(
                    (salmon.count / (salmon.count + eel.count + flesh.count)) *
                    100
                  ).toFixed(2)}
                  %
                </td>
                <td>
                  {((eel.count / (salmon.count + eel.count + flesh.count)) * 100).toFixed(
                    2
                  )}
                  %
                </td>
                <td>
                  {(
                    (flesh.count / (salmon.count + eel.count + flesh.count)) *
                    100
                  ).toFixed(2)}
                  %
                </td>
                <td>100%</td>
              </tr>
              <tr>
                <td>수량</td>
                <td>{salmon.count}개</td>
                <td>{eel.count}개</td>
                <td>{flesh.count}개</td>
                <td>{salmon.count + eel.count + flesh.count}개</td>
              </tr>
              <tr>
                <td>판매</td>
                <td>{stringAccounting(salmon.amount)}원</td>
                <td>{stringAccounting(eel.amount)}원</td>
                <td>{stringAccounting(flesh.amount)}원</td>
                <td>{stringAccounting(salmon.amount + eel.amount + flesh.amount)}원</td>
              </tr>
            </tbody>
          </table>
        </Result>
      )}

      <table className="table">
        <thead>
          <tr>
            <th>날짜</th>
            <th>행사명</th>
            <th>출신</th>
            <th>품명(단가)</th>
            <th>수량</th>
            <th>금액</th>
          </tr>
        </thead>
        <tbody>
          {launches === null || launches.length === 0 ? (
            <tr>
              <td colSpan={7}>작성된 내역이 없습니다.</td>
            </tr>
          ) : (
            <>
              {launches.map((launch, i) => (
                <tr key={i}>
                  <td>{new Date(launch.created_at).toLocaleDateString()}</td>
                  <td>
                    <strong>
                      {launch.title.length > 20 ? (
                        <>{launch.title.slice(0, 20)}...</>
                      ) : (
                        <>{launch.title}</>
                      )}
                    </strong>
                  </td>
                  <td>{launch.native}</td>
                  <td>
                    {(function () {
                      if (launch.price === 20000) {
                        return '제육 도시락(20,000)';
                      } else if (launch.price === 25000) {
                        return '장어 도시락(25,000)';
                      } else {
                        return '연어 도시락(30,000)';
                      }
                    })()}
                  </td>
                  <td>{launch.count}</td>
                  <td>
                    <strong>{stringAccounting(launch.amount)}원</strong>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </Container>
  );
};

export default ListLaunch;
