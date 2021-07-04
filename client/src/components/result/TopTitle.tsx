import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import Time from './common/Time';
import Chart from './common/Chart';
import 'react-datepicker/dist/react-datepicker.css';

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: ${oc.indigo[7]};
    margin-bottom: 3rem;
  }
`;

const ChartBox = styled.div`
  width: 100%;
  max-width: 1000px;
`;

interface Props {
  titles: TopTitleType[];
}

const TopTitle: React.FC<Props> = ({ titles }) => {
  return (
    <Container>
      <h2>행사 건수별 20순위 ('20. 3. 5. ~ 현재)</h2>

      <Time />

      <ChartBox>
        <Chart titles={titles} />
      </ChartBox>
    </Container>
  );
};

export default TopTitle;
