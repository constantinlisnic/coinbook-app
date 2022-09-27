import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getURL } from "utils";
import { LineChart, BarChart } from "components/charts";
import { LoadingTwoMainCharts } from "components/loadingContainers";
import { ChartsContainer, OverView } from "./TwoMainCharts.styles";

function TwoMainCharts() {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, SetErrorMessage] = useState(null);
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );

  const getChartData = async () => {
    try {
      setIsLoading(true);
      const path = "coins/bitcoin/market_chart";
      const config = {
        vs_currency: currencyName,
        days: 30,
        interval: "daily",
      };
      const url = getURL(path, config);
      const { data } = await axios(url);
      setChartData(data);
      setIsLoading(false);
    } catch ({ message }) {
      SetErrorMessage(message);
    }
  };

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line
  }, [currencyName]);

  const isFetched = !isLoading && chartData;
  return (
    <>
      <OverView>Your overview</OverView>
      {isFetched ? (
        <ChartsContainer>
          <LineChart {...chartData} />
          <BarChart {...chartData} />
        </ChartsContainer>
      ) : (
        <LoadingTwoMainCharts error={errorMessage} />
      )}
    </>
  );
}

export default TwoMainCharts;
