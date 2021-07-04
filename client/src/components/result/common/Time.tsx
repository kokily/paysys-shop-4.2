import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import DatePicker, { registerLocale } from 'react-datepicker';
import ko from 'date-fns/locale/ko';
import useTime from '../hooks/useTime';

registerLocale('ko', ko);

// Styles
const Container = styled.div`
  display: flex;
  label {
    display: flex;
    align-self: center;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  input {
    border-radius: 4px;
    width: 120px;
    height: 34px;
    outline: none;
    border: 1px solid ${oc.gray[4]};
    text-align: center;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: ${oc.cyan[2]};
    }
  }
`;

const Space = styled.div`
  display: flex;
  align-self: center;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`;

interface Props {}

const Time: React.FC<Props> = () => {
  const { startTime, endTime, setStartTime, setEndTime} = useTime()

  return (
    <Container>
      <DatePicker
        locale="ko"
        startDate={startTime.date}
        selected={startTime.date}
        onChange={(date: any) => setStartTime({ date })}
        dateFormat="yyyy, MM dd"
      />
      <Space>~</Space>
      <DatePicker
        locale="ko"
        startDate={endTime.date}
        selected={endTime.date}
        onChange={(date: any) => setEndTime({ date })}
        dateFormat="yyyy, MM dd"
      />
    </Container>
  );
};

export default Time;