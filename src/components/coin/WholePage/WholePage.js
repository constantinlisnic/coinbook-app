import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetCoinDataQuery, useGetCoinChartQuery } from "store/apiSlice";
import {
  Summary,
  CurrencyConvertor,
  TimeChart,
  RangeSelector,
} from "components/coin";
import { LoadingSummary } from "components/loadingContainers";

function WholePage(props) {
  const [days, setDays] = useState("30");
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );

  const {
    data: coinData,
    isSuccess: coinDataSuccess,
    error: coinErrorMessage,
  } = useGetCoinDataQuery(props.coinId);

  const { data: chartData, isSuccess: chartDataSuccess } = useGetCoinChartQuery(
    { coinId: props.coinId, currencyName, days }
  );

  const handleRangeChange = (selectedDays) => {
    setDays(selectedDays);
  };

  const isFetched = chartDataSuccess && coinDataSuccess;
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
    <LoadingSummary errorCoin={coinErrorMessage} />
  );
}

export default WholePage;
