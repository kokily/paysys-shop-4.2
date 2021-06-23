import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { stringAccounting } from '../../../libs/utils';

// Styles
const Table = styled.table`
  display: inline;
  font-size: 0.95rem;

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
    background: #e3e0fa;
    color: ${oc.violet[9]};
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
      background: white;
      color: #d941c5;
    }
  }
  td {
    width: 93.3px;
    font-size: 0.9rem;
    overflow: hidden;
    text-align: right;
    &.sub {
      color: ${oc.violet[9]};
      font-weight: bold;
    }
  }
`;

interface Props {
  wedding: WeddingType | null;
  convention: ConventionType | null;
  company: CompanyType | null;
  event: EventType | null;
  hanbok: HanbokType | null;
}

const ReadWeddingLeft: React.FC<Props> = ({
  wedding,
  convention,
  company,
  event,
  hanbok,
}) => {
  return (
    <>
      {wedding && (
        <Table>
          <tbody>
            <tr>
              <th colSpan={4}>예식비용</th>
            </tr>

            <tr>
              <th style={{ background: 'white', color: '#d941c5' }}>총 예식비용</th>
              <td style={{ color: '#d941c5' }}>
                {stringAccounting(wedding.cost_husband)}원
              </td>
              <td style={{ color: '#d941c5' }}>
                {stringAccounting(wedding.cost_bride)}원
              </td>
              <td style={{ color: '#d941c5', fontWeight: 'bold' }}>
                {stringAccounting(wedding.cost_husband + wedding.cost_bride)}원
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingLeft;
