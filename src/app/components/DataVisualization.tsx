import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DataVisualizationProps {
  data: any[];
  xAxis: string;
  yAxis: string;
  stackBy?: string;
  type: 'bar' | 'stackedBar';
}

const DataVisualization: React.FC<DataVisualizationProps> = ({ data, xAxis, yAxis, stackBy, type }) => {
  const chartData = {
    labels: data.map(item => item[xAxis]),
    datasets: type === 'bar' 
      ? [{
          label: yAxis,
          data: data.map(item => item[yAxis]),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        }]
      : Array.from(new Set(data.map(item => item[stackBy!]))).map((stackValue, index) => ({
          label: stackValue,
          data: data.map(item => item[stackBy!] === stackValue ? item[yAxis] : 0),
          backgroundColor: `rgba(${index * 50}, ${255 - index * 50}, ${index * 25}, 0.6)`,
        }))
  };

  const options = {
    responsive: true,
    scales: {
      x: { stacked: type === 'stackedBar' },
      y: { stacked: type === 'stackedBar' },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default DataVisualization;