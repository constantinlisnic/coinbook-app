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
import numeral from "numeral";
import {
  BarChartContainer,
  BarChartTitle,
  VolumeContainer,
  BTCSpan,
  Volume,
} from "./BarChart.styles";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart(props) {
  const chartData = props.total_volumes.map((data) => ({
    date: data[0],
    volume: data[1],
  }));

  const data = {
    labels: chartData.map((data) => {
      const date = new Date(data.date);
      const config = { month: "short", day: "numeric" };
      return new Intl.DateTimeFormat("default", config).format(date);
    }),
    datasets: [
      {
        label: "Volume",
        data: chartData.map((data) => data.volume),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    elements: {
      bar: {
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(0, 252, 42, 0.8)");
          gradient.addColorStop(1, "rgba(254,16,64, 0.7)");
          return gradient;
        },
        hoverBackgroundColor: "#2c2f36",
        borderRadius: 4,
        hoverBorderWidth: 2,
        hoverBorderColor: "green",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          maxTicksLimit: 8,
          maxRotation: 0,
          align: "start",
        },
      },
      y: {
        display: false,
        grace: "5%",
      },
    },
  };
  return (
    <BarChartContainer>
      <VolumeContainer>
        <div>
          <BTCSpan>BTC</BTCSpan> 24h volume:
        </div>
        <Volume>
          {" "}
          {props.symbol +
            numeral(
              props.total_volumes[props.total_volumes.length - 1][1]
            ).format("0,0.00")}
        </Volume>
      </VolumeContainer>
      <BarChartTitle>Last 30d change</BarChartTitle>
      <Bar options={options} data={data} />
    </BarChartContainer>
  );
}

export default BarChart;
