import React from 'react';
import TableInput from './TableInput';

interface Props extends ExpenseHanbokType {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Hanbok: React.FC<Props> = ({
  hanbok_pre_husband,
  hanbok_pre_bride,
  hanbok_post_husband,
  hanbok_post_bride,
  onChange,
}) => {
  return (
    <>
      <h3>한복업체</h3>

      <table>
        <tbody>
          <tr>
            <th>구 분</th>
            <th className="basic" style={{ background: 'skyblue' }}>
              신랑
            </th>
            <th className="basic" style={{ background: 'pink' }}>
              신부
            </th>
            <th className="basic red">계</th>
          </tr>

          <TableInput
            title="한복(선불)"
            husband_name="hanbok_pre_husband"
            husband_value={hanbok_pre_husband}
            bride_name="hanbok_pre_bride"
            bride_value={hanbok_pre_bride}
            onChange={onChange}
          />

          <TableInput
            title="한복(후불)"
            husband_name="hanbok_post_husband"
            husband_value={hanbok_post_husband}
            bride_name="hanbok_post_bride"
            bride_value={hanbok_post_bride}
            onChange={onChange}
          />
        </tbody>
      </table>
    </>
  );
};

export default Hanbok;
