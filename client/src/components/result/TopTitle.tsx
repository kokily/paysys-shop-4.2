import React from 'react';
import styled from 'styled-components';
import { BarController, LinearScale, BarElement, TimeScale, Tooltip } from 'chart.js';
import { ReactChart } from 'chartjs-react';
import { useState } from 'react';
import { useEffect } from 'react';

ReactChart.register(BarController, LinearScale, BarElement, TimeScale, Tooltip);

const chartOption = {
  scales: {
    x: {
      name: 'name',
      type: 'string',
    },
    y: {
      name: 'count',
      type: 'number',
    },
  },
};

// Styles
const Container = styled.div``;

interface Props {
  titles: TopTitleType[];
}

const TopTitle: React.FC<Props> = ({ titles }) => {
  const [data, setData] = useState<TopTitleType[]>([]);

  useEffect(() => {
    if (titles) {
      setData(titles);
    }
  }, [data]);

  return (
    <Container>
      <h2>20 순위('20. 3. 5. ~ 현재)</h2>

      <div></div>
    </Container>
  );
};

export default TopTitle;
