import React from 'react';
import TableInput from './TableInput';
import TableOneInput from './TableOneInput';
import TableSelect from './TableSelect';

interface Props extends ExpensePresentType {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Present: React.FC<Props> = ({
  present,
  present_price,
  present_num_husband,
  present_num_bride,
  onChange,
}) => {
  const provider = [
    { title: '각각 결제', value: 'privacy' },
    { title: '신랑 결제', value: 'husband' },
    { title: '신부 결제', value: 'bride' },
    { title: '반반 결제', value: 'half' },
  ];

  return (
    <>
      <h3>답례품 비용</h3>

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

          <TableSelect
            title="답례품분할"
            name="present"
            value={present}
            onChange={onChange}
            data={provider}
          />

          <TableOneInput
            title="답례품단가"
            name="present_price"
            value={present_price}
            onChange={onChange}
          />

          <TableInput
            title="하객인원"
            husband_name="present_num_husband"
            husband_value={present_num_husband}
            bride_name="present_num_bride"
            bride_value={present_num_bride}
            onChange={onChange}
            unit
          />
        </tbody>
      </table>
    </>
  );
};

export default Present;
