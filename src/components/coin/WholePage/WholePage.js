import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getURL } from "utils";
import {
  Summary,
  CurrencyConvertor,
  TimeChart,
  RangeSelector,
} from "components/coin";
import { LoadingSummary } from "components/loadingContainers";

function WholePage(props) {
  const [coinData, setCoinData] = useState(null);
  const [chartData, setChartData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [days, setDays] = useState("30");
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );

  const getCoinData = async () => {
    try {
      setIsLoading(true);

      const coinDataPath = `coins/${props.coinId}`;
      const coinDataURL = getURL(coinDataPath);
      const { data } = await axios(coinDataURL);

      setCoinData(data);
      setIsLoading(false);
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  const getChartData = async () => {
    try {
      const chartDataPath = `coins/${props.coinId}/market_chart`;
      const chartConfig = {
        vs_currency: currencyName,
        days: days,
      };
      const charDataURL = getURL(chartDataPath, chartConfig);
      const { data } = await axios(charDataURL);

      setChartData(data);
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  const handleRangeChange = (selectedDays) => {
    setDays(selectedDays);
  };

  useEffect(() => {
    getCoinData();
    getChartData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line
  }, [days, currencyName]);

  const isFetched = !isLoading && coinData && chartData;
  return isFetched ? (
    <>
      <Summary coinData={coinData} />
      <CurrencyConvertor coinData={coinData} />
      <RangeSelector
        handleRangeChange={handleRangeChange}
        selectedRange={days}
      />
      <TimeChart chartData={chartData.prices} />
    </>
  ) : (
    <LoadingSummary error={errorMessage} />
  );
}

export default WholePage;
