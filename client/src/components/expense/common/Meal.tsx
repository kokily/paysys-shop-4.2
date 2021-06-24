import React from 'react';
import TableInput from './TableInput';
import TableOneInput from './TableOneInput';
import TableSelect from './TableSelect';

interface Props extends ExpenseMealType {
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Meal: React.FC<Props> = ({
  meals,
  meals_price,
  meals_num_husband,
  meals_num_bride,
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
      <h3>식사 비용</h3>

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
            title="식대분할"
            name="meals"
            value={meals}
            onChange={onChange}
            data={provider}
          />

          <TableOneInput
            title="식대단가"
            name="meals_price"
            value={meals_price}
            onChange={onChange}
          />

          <TableInput
            title="하객인원"
            husband_name="meals_num_husband"
            husband_value={meals_num_husband}
            bride_name="meals_num_bride"
            bride_value={meals_num_bride}
            onChange={onChange}
            unit
          />
        </tbody>
      </table>
    </>
  );
};

export default Meal;
