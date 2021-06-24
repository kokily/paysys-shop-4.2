import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Vacuity from '../Vacuty';
import ReadMeal from '../Right/ReadMeal';
import ReadPresent from '../Right/ReadPresent';
import ReadReserve from '../Right/ReadReserve';

// Styles
const Table = styled.table`
  margin-top: 2rem;

  tr {
    &:hover {
      background: rgba(165, 102, 255, 0.2);
    }
  }
  th,
  td {
    border-radius: 8px;
    padding-top: 0.15rem;
    padding-bottom: 0.15rem;
  }
  th {
    background: #e3e0fa;
    color: ${oc.violet[9]};
    width: 160px;
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
    width: 90px;
    font-size: 0.85rem;
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

const ReadWeddingMobileBottom: React.FC<Props> = ({
  wedding,
  meal,
  present,
  reserve,
}) => {
  return (
    <>
      {wedding && (
        <Table>
          <tbody>
            {meal && <ReadMeal meal={meal} />}

            <Vacuity />

            {present && <ReadPresent present={present} />}

            <Vacuity />

            {reserve && <ReadReserve reserve={reserve} />}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ReadWeddingMobileBottom;
