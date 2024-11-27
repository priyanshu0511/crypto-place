import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register components globally
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

const LineChart = ({ chartData }) => {
  if (!chartData.data) {
    return null; // Return nothing if chartData is not available
  }

  return (
    <div className="w-[93%] block ml-auto mr-auto">
      <Line data={chartData.data} options={chartData.options} />
    </div>
  );
};

export default LineChart;
