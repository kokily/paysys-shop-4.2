import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Input from './common/Input';

// Styles
const NameContainer = styled.div`
  display: float;

  h3 {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
  }
`;

const DateContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;

  input {
    width: 95px;
    height: 25px;
    border: 2px solid ${oc.cyan[7]};
    background: ${oc.cyan[5]};
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }

  select {
    width: 95px;
    height: 25px;
    border: 2px solid ${oc.teal[7]};
    background: ${oc.teal[5]};
    color: white;
    border-radius: 3px;
    text-align: center;
    margin-right: 10px;
  }
`;

interface Props extends ExpenseWeddingType {
  setStartDate: any;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const Expense: React.FC<Props> = ({
  husband_name,
  bride_name,
  wedding_at,
  event_at,
  setStartDate,
  onChange,
}) => {
  return (
    <>
      <NameContainer>
        <span>신랑님: </span>
        <strong>
          <Input name="husband_name" value={husband_name} onChange={onChange} />
        </strong>

        <span>신부님: </span>
        <strong>
          <Input name="bride_name" value={bride_name} onChange={onChange} />
        </strong>
      </NameContainer>

      <DateContainer>
        <span>웨딩일자: </span>
        <DatePicker
          locale="ko"
          startDate={wedding_at}
          selected={wedding_at}
          onChange={setStartDate as any}
          dateFormat="yyyy, MM dd"
        />

        <span>웨딩시간: </span>
        <select name="event_at" value={event_at} onChange={onChange}>
          <option value="">전체</option>
          <option value="11:30">11:30</option>
          <option value="13:00">13:00</option>
          <option value="14:30">14:30</option>
          <option value="16:00">16:00</option>
          <option value="17:30">17:30</option>
          <option value="19:00">19:00</option>
        </select>
      </DateContainer>

      <hr style={{ width: '90%' }} />
    </>
  );
};

export default Expense;
