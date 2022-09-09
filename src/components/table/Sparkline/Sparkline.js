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
        borderColor:
          props.price_change_percentage_7d_in_currency > 0
            ? "#00FC2A"
            : "#fe1040",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
    elements: { point: { radius: 0 } },
  };
  return (
    <div>
      <Line width={150} height={50} options={options} data={data} />
    </div>
  );
}

export default Sparkline;
