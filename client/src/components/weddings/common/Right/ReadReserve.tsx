import React from 'react';
import { stringAccounting } from '../../../../libs/utils';
import Vacuity from '../Vacuty';

interface Props {
  reserve: ReserveType;
  hanbok: HanbokType;
}

const ReadReserve: React.FC<Props> = ({ reserve, hanbok }) => {
  return (
    <>
      <tr>
        <th colSpan={4}>예약금</th>
      </tr>
      <tr>
        <th>구분</th>
        <th className="basic" style={{ background: 'white' }}>
          신랑
        </th>
        <th className="basic" style={{ background: 'white' }}>
          신부
        </th>
        <th className="basic" style={{ background: 'white' }}>
          계
        </th>
      </tr>

      <tr>
        <th>예약금 분할</th>
        <td className="sub" colSpan={3} style={{ textAlign: 'center' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return '예약금 반반';
            } else if (reserve.reserve === 'husband') {
              return '예약금 신랑';
            } else {
              return '예약금 신부';
            }
          })()}
        </td>
      </tr>

      <tr>
        <th>예약금</th>
        <td style={{ color: 'red' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return `-${stringAccounting(reserve.reserve_pay / 2)}원`;
            } else if (reserve.reserve === 'husband') {
              return `-${stringAccounting(reserve.reserve_pay)}원`;
            } else {
              return `0원`;
            }
          })()}
        </td>
        <td style={{ color: 'red' }}>
          {(function () {
            if (reserve.reserve === 'half') {
              return `-${stringAccounting(reserve.reserve_pay / 2)}원`;
            } else if (reserve.reserve === 'husband') {
              return `0원`;
            } else {
              return `-${stringAccounting(reserve.reserve_pay)}원`;
            }
          })()}
        </td>
        <td className="sub" style={{ color: 'red' }}>
          -{stringAccounting(reserve.reserve_pay)}원
        </td>
      </tr>

      {hanbok.hanbok_pre_husband !== 0 || hanbok.hanbok_pre_bride !== 0 ? (
        <tr>
          <th>한복(선불)</th>
          <td style={{ color: 'red' }}>
            -{stringAccounting(hanbok.hanbok_pre_husband)}원
          </td>
          <td style={{ color: 'red' }}>-{stringAccounting(hanbok.hanbok_pre_bride)}원</td>
          <td className="sub" style={{ color: 'red' }}>
            -{stringAccounting(hanbok.hanbok_pre_husband + hanbok.hanbok_pre_bride)}원
          </td>
        </tr>
      ) : (
        <Vacuity />
      )}
    </>
  );
};

export default ReadReserve;
