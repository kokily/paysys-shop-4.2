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

  h3 {
    margin: 0.96rem;
  }
`;

interface Props {
  wedding: WeddingType | null;
  meal: MealType | null;
  present: PresentType | null;
  reserve: ReserveType | null;
  hanbok: HanbokType | null;
}

const ReadWeddingRight: React.FC<Props> = ({
  wedding,
  meal,
  present,
  reserve,
  hanbok,
}) => {
  let allCost = 0;
  let payment = 0;
  let husbandCost = 0;
  let brideCost = 0;

  if (wedding && meal && present && hanbok) {
    allCost =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride;

    payment =
      wedding.cost_husband +
      wedding.cost_bride +
      wedding.meal_husband +
      wedding.meal_bride +
      wedding.present_husband +
      wedding.present_bride -
      wedding.reserve_husband -
      wedding.reserve_bride -
      hanbok.hanbok_pre_husband -
      hanbok.hanbok_pre_bride;

    husbandCost =
      wedding.cost_husband +
      wedding.meal_husband +
      wedding.present_husband -
      wedding.reserve_husband -
      hanbok.hanbok_pre_husband;

    brideCost =
      wedding.cost_bride +
      wedding.meal_bride +
      wedding.present_bride -
      wedding.reserve_bride -
      hanbok.hanbok_pre_bride;
  }

  return (
    <>
      {wedding && (
        <Table>
          <tbody>
            {meal && <ReadMeal meal={meal} />}

            {present && <ReadPresent present={present} />}

            <Vacuity />

            {reserve && hanbok && <ReadReserve reserve={reserve} hanbok={hanbok} />}

            <Vacuity />

            <tr>
              <td colSpan={4} rowSpan={9} style={{ textAlign: 'center' }}>
                <h3 style={{ color: 'silver' }}>
                  웨딩 총 비용: {stringAccounting(allCost)}원
                </h3>
                <h3 style={{ color: 'blue' }}>
                  결제 총 비용: {stringAccounting(payment)}원
                </h3>
                <h3>신랑 총 결제비용: {stringAccounting(husbandCost)}원</h3>
                <h3>신부 총 결제비용: {stringAccounting(brideCost)}원</h3>
              </td>
            </tr>
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingRight;
