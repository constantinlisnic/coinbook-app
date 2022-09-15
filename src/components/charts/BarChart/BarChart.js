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
  const { labels, values } = props.total_volumes.reduce(
    ({ labels, values }, [label, value]) => {
      return {
        labels: [...labels, label],
        values: [...values, value],
      };
    },
    { labels: [], values: [] }
  );

  const data = {
    labels: labels.map((label) => {
      const date = new Date(label);
      const config = { month: "short", day: "numeric" };
      return new Intl.DateTimeFormat("default", config).format(date);
    }),
    datasets: [
      {
        label: "Volume",
        data: values,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = `${context.dataset.label}: ${props.symbol}${context.formattedValue}`;
            return label;
          },
        },
      },
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
