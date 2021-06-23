import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 30px;
`;

const StyledSelect = styled.select`
  background: ${oc.gray[0]};
  width: 100%;
  padding: 10px;
  padding-left: 0px;
  border: none;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid ${oc.cyan[6]};
  margin-bottom: -1rem;
  cursor: pointer;
  &:focus {
    background: ${oc.indigo[6]};
    color: white;
  }
`;

interface Props {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  data: string[];
}

const Select: React.FC<Props> = ({ name, value, onChange, data }) => {
  return (
    <Container>
      <StyledSelect name={name} value={value} onChange={onChange}>
        {data.map((divide, i) => (
          <option key={i} value={divide}>
            {divide}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default Select;
