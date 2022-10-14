import { useAppSelector } from "hooks";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "./TimeChart.styles";

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

function TimeChart({ chartData }: { chartData: any[] }) {
  const { symbol: currencySymbol } = useAppSelector(
    (state) => state.settings.activeCurrency
  );

  const { labels, values } = chartData.reduce(
    ({ labels, values }, [label, value]) => {
      return {
        labels: [...labels, label],
        values: [...values, value],
      };
    },
    { labels: [], values: [] }
  );

  const data = {
    labels: labels.map((label: number) => {
      const date = new Date(label);
      return date.toUTCString();
    }),

    datasets: [
      {
        label: "Price",
        data: values,
      },
    ],
  };

  const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: {
            dataset: { label: number };
            formattedValue: string;
          }) => {
            const label = `${context.dataset.label}: ${currencySymbol}${context.formattedValue}`;
            return label;
          },
        },
      },
    },
    elements: {
      line: {
        borderColor: "rgba(0, 126, 167, 0.5)",
        borderWidth: 1,
        tension: 0.4,
        fill: true,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 320);
          gradient.addColorStop(0, "rgba(0, 126, 167, 0.5)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
      },
      point: {
        radius: 0,
        borderColor: "#007ea7",
        backgroundColor: "#2c2f36",
        hoverRadius: 6,
        hoverBorderWidth: 2,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
      axis: "x",
    },
  };

  return (
    <Container>
      <Line options={options} data={data} />
    </Container>
  );
}

export default TimeChart;
