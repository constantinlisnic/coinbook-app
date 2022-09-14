import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function Sparkline(props) {
  const data = {
    labels: props.sparkline_in_7d.price,
    datasets: [
      {
        label: props.name,
        data: props.sparkline_in_7d.price,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
    elements: {
      point: {
        radius: 0,
        hoverRadius: 0,
      },
      line: {
        tension: 0.4,
        borderColor:
          props.price_change_percentage_7d_in_currency > 0
            ? "#00FC2A"
            : "#fe1040",
        borderWidth: 2,
      },
    },
  };
  return (
    <div>
      <Line width={150} height={50} options={options} data={data} />
    </div>
  );
}

export default Sparkline;
