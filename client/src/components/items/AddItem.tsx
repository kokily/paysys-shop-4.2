import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../libs/styles';
import Button from '../common/Button';
import Input from './common/Input';
import Select from './common/Select';

// Styles
const Container = styled.div`
  position: absolute;
  width: 320px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${shadow(1)};
  animation: 0.5s ease-out 0s 1 fadeIn;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Logo = styled.div`
  background: ${oc.cyan[5]};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 5px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    color: ${oc.cyan[2]};
  }
`;

const Form = styled.form`
  background: white;
  padding: 2rem;
  height: auto;
`;

interface Props {
  name: string;
  divide: string;
  native: string;
  unit: string;
  price: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onSubmit: (e: React.MouseEvent) => Promise<void>;
  onBack: () => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLInputElement> & React.MouseEvent) => void;
}

const AddItem: React.FC<Props> = ({
  name,
  divide,
  native,
  unit,
  price,
  onChange,
  onSubmit,
  onBack,
  onKeyPress,
}) => {
  const divideArray = [
    '식사(뷔페)',
    '식사(중식)',
    '식사(양식)',
    '식사(한식)',
    '식사(수행)',
    '식사(다과)',
    '대관료',
    '레드와인',
    '화이트와인/샴페인',
    '주스/차',
    '민속주/고량주',
    '양주',
    '기타주류',
    '칵테일',
    '반입료',
    '부대비용',
  ];
  const nativeArray = ['현역', '예비역', '일반'];

  return (
    <Container>
      <Logo>품목 등록</Logo>

      <Form>
        <Input name="name" value={name} onChange={onChange} label="품 명" focus />

        <Select name="divide" value={divide} onChange={onChange} data={divideArray} />
        <Select name="native" value={native} onChange={onChange} data={nativeArray} />

        <Input name="unit" value={unit} onChange={onChange} label="단 위" />
        <Input name="price" value={price} onChange={onChange} label="단 가" />

        <Button submit fullSize onClick={onSubmit}>
          등록하기
        </Button>
        <Button cancel fullSize onClick={onBack}>
          취소하기
        </Button>
      </Form>
    </Container>
  );
};

export default AddItem;
