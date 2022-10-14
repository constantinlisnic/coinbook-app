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
import numeral from "numeral";
import {
  LineChartContainer,
  PriceContainer,
  BTCSpan,
  LineChartTitle,
  Price,
} from "./LineChart.styles";

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

function LineChart(props: { prices: any[] }) {
  const { symbol: currencySymbol } = useAppSelector(
    (state) => state.settings.activeCurrency
  );

  const { labels, values } = props.prices.reduce(
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
      const config: any = { month: "short", day: "numeric" };
      return new Intl.DateTimeFormat("default", config).format(date);
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
        borderColor: "#00fc2a",
        tension: 0.4,
        fill: true,
        backgroundColor: (context: { chart: { ctx: any } }) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 250);
          gradient.addColorStop(0, "rgba(0, 255, 95, 0.5)");
          gradient.addColorStop(1, "rgba(0, 0, 0, 0.0)");
          return gradient;
        },
      },
      point: {
        radius: 0,
        borderColor: "green",
        backgroundColor: "#2c2f36",
        hoverRadius: 6,
        hoverBorderWidth: 2,
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
      },
    },
    interaction: {
      intersect: false,
      mode: "nearest",
      axis: "x",
    },
  };
  return (
    <LineChartContainer>
      <PriceContainer>
        <div>
          <BTCSpan>BTC</BTCSpan> current price:
        </div>
        <Price>
          {currencySymbol +
            numeral(props.prices[props.prices.length - 1][1]).format("0,0.00")}
        </Price>
      </PriceContainer>
      <LineChartTitle>Last 30d change</LineChartTitle>
      <Line options={options} data={data} />
    </LineChartContainer>
  );
}

export default LineChart;
