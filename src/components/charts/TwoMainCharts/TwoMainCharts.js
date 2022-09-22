import { useState, useEffect } from "react";
import axios from "axios";
import { getURL } from "utils";
import { LineChart, BarChart } from "components/charts";
import { LoadingTwoMainCharts } from "components/loadingContainers";
import { ChartsContainer, OverView } from "./TwoMainCharts.styles";

function TwoMainCharts(props) {
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, SetErrorMessage] = useState(null);

  const getChartData = async () => {
    try {
      setIsLoading(true);
      const path = "coins/bitcoin/market_chart";
      const config = {
        vs_currency: props.currency.name,
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
  }, [props.currency.name]);

  const isFetched = !isLoading && chartData;
  return (
    <>
      <OverView>Your overview</OverView>
      {isFetched ? (
        <ChartsContainer>
          <LineChart {...chartData} symbol={props.currency.symbol} />
          <BarChart {...chartData} symbol={props.currency.symbol} />
        </ChartsContainer>
      ) : (
        <LoadingTwoMainCharts error={errorMessage} />
      )}
    </>
  );
}

export default TwoMainCharts;
