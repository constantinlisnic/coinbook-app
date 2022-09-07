import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const chartData = props.prices.map((data) => ({
    date: data[0],
    price: data[1],
  }));

  const data = {
    labels: chartData.map((data) => {
      const date = new Date(data.date);
      return date.getDate();
    }),
    datasets: [
      {
        data: chartData.map((data) => data.price),
        borderColor:
          props.price_change_percentage_7d_in_currency > 0 ? "green" : "red",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        lineTension: 0.5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: true, text: "BTC Volume Last 60d" },
    },
  };
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
}

export default BarChart;
