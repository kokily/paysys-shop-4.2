import React from 'react';
import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

// Styles
const Container = styled.div``;

interface Props {
  titles: TopTitleType[];
}

const TopTitle: React.FC<Props> = ({ titles }) => {
  const names = titles.map((title) => title.name);
  const counts = titles.map((title) => title.count);

  const data = {
    labels: titles && names,
    datasets: [
      // count
      {
        label: '건수',
        data: titles && counts,
        lineTension: 0,
        backgroundColor: 'rgba(242, 184, 113, 0.1)',
        borderWidth: 1,
        borderColor: '#f2b471',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: names,
            fontFamily: 'Montserrat',
            fontColor: 'black',
          },
        },
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: true,
            labelString: '건수',
            fontFamily: 'Montserrat',
            fontColor: 'black',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 1,
            min: 0,
            max: 100,
            callback: function (value: number) {
              return value + '%';
            },
          },
        },
      ],
    },
  };

  return (
    <Container>
      <h2>20 순위('20. 3. 5. ~ 현재)</h2>

      <div>
        <Line type="line" data={data} options={options} />
      </div>
    </Container>
  );
};

export default TopTitle;
