import { useAppSelector } from "hooks";
import { LineChart, BarChart } from "components/charts";
import { LoadingTwoMainCharts } from "components/loadingContainers";
import { ChartsContainer, OverView } from "./TwoMainCharts.styles";
import { useGetChartDataQuery } from "store/apiSlice";

function TwoMainCharts() {
  const { name: currencyName } = useAppSelector(
    (state) => state.settings.activeCurrency
  );

  const {
    data: chartData,
    isSuccess,
    isLoading,
    error,
  } = useGetChartDataQuery(currencyName);

  return (
    <>
      <OverView>Your overview</OverView>
      {!isLoading && isSuccess ? (
        <ChartsContainer>
          <LineChart {...chartData} />
          <BarChart {...chartData} />
        </ChartsContainer>
      ) : (
        <LoadingTwoMainCharts error={error} />
      )}
    </>
  );
}

export default TwoMainCharts;
