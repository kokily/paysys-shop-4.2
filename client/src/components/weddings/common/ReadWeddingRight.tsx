import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { stringAccounting } from '../../../libs/utils';
import ReadMeal from './Right/ReadMeal';
import ReadPresent from './Right/ReadPresent';
import ReadReserve from './Right/ReadReserve';
import Vacuity from './Vacuty';

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
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
}

const ReadWeddingRight: React.FC<Props> = ({ wedding, meal, present, reserve }) => {
  return (
    <>
      {wedding && (
        <Table>
          <tbody>
            <tr>
              <th colSpan={4}>식사비용</th>
            </tr>

            {meal && <ReadMeal meal={meal} />}

            <Vacuity />

            <tr>
              <th colSpan={4}>답례품 비용</th>
            </tr>
            {present && <ReadPresent present={present} />}

            <Vacuity />

            <tr>
              <th colSpan={4}>예약금</th>
            </tr>
            {reserve && <ReadReserve reserve={reserve} />}

            <Vacuity />

            <tr>
              <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'silver' }}>
                  웨딩 총 비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.cost_bride +
                      wedding.meal_husband +
                      wedding.meal_bride +
                      wedding.present_husband +
                      wedding.present_bride
                  )}
                  원
                </h3>
                <h3 style={{ color: 'blue' }}>
                  결제 총 비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.cost_bride +
                      wedding.meal_husband +
                      wedding.meal_bride +
                      wedding.present_husband +
                      wedding.present_bride -
                      wedding.reserve_husband -
                      wedding.reserve_bride
                  )}
                  원
                </h3>
                <h3>
                  신랑 총 결제비용:{' '}
                  {stringAccounting(
                    wedding.cost_husband +
                      wedding.meal_husband +
                      wedding.present_husband -
                      wedding.reserve_husband
                  )}
                  원
                </h3>
                <h3>
                  신부 총 결제비용:{' '}
                  {stringAccounting(
                    wedding.cost_bride +
                      wedding.meal_bride +
                      wedding.present_bride -
                      wedding.reserve_bride
                  )}
                  원
                </h3>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingRight;
