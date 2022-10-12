import { useState } from "react";
import { useAppSelector } from "hooks";
import { useGetCoinDataQuery, useGetCoinChartQuery } from "store/apiSlice";
import {
  Summary,
  CurrencyConvertor,
  TimeChart,
  RangeSelector,
} from "components/coin";
import { LoadingSummary } from "components/loadingContainers";

function WholePage(props: { coinId: string }) {
  const [days, setDays] = useState("30");
  const { name: currencyName } = useAppSelector(
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

  const handleRangeChange = (selectedDays: string) => {
    setDays(selectedDays);
  };

  const isFetched = chartDataSuccess && coinDataSuccess;
  return isFetched ? (
    <>
      <Summary {...coinData} />
      <CurrencyConvertor {...coinData} />
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
