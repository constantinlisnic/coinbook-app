import numeral from "numeral";
import { useAppSelector } from "hooks";
import { PortfolioCoinProps } from "PortfolioCoinProps";
import { DisplayPriceChange, ProgressBar } from "components";
import {
  Container,
  DataWrapper,
  DataName,
  Title,
  GainLoss,
  ChangedValueDiv,
  BarPercentage,
  Bar,
  PriceWrapper,
  StyledCart,
  ItemWrapper,
} from "./MarketData.styles";

function MarketData(props: PortfolioCoinProps["marketData"]) {
  const { symbol: currencySymbol } = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  const {
    current_price,
    price_change_24h,
    price_change_percentage_24h,
    market_cap,
    total_volume,
    circulating_supply,
    total_supply,
  } = props[0];
  return (
    <Container>
      <Title>
        <div>Market</div>
        <StyledCart />
      </Title>
      <DataWrapper>
        <ItemWrapper>
          <DataName>Current Price</DataName>
          <PriceWrapper>
            {current_price?.toString().includes("e")
              ? currencySymbol + "0.000000..."
              : currencySymbol +
                numeral(current_price).format("0,0.00[00000000]")}
          </PriceWrapper>
        </ItemWrapper>

        <ItemWrapper>
          <DataName>Price Change 24h</DataName>
          <GainLoss>
            <DisplayPriceChange priceChange={price_change_percentage_24h} />
            <ChangedValueDiv priceChange={price_change_24h}>
              {currencySymbol +
                numeral(price_change_24h?.toFixed(3)).format("0,0.000")}
            </ChangedValueDiv>
          </GainLoss>
        </ItemWrapper>

        <ItemWrapper>
          <DataName>Volume/Market Cap</DataName>
          <Bar>
            <BarPercentage>
              {numeral((total_volume / market_cap) * 100).format("0.0") + "%"}
            </BarPercentage>
            <ProgressBar
              barWidth={120}
              wholeValue={market_cap}
              filler={total_volume}
              color="blue"
            />
          </Bar>
        </ItemWrapper>

        <ItemWrapper>
          <DataName>Circ. Supply/Max Supply</DataName>
          <Bar>
            <BarPercentage>
              {numeral((circulating_supply / total_supply) * 100).format(
                "0.0"
              ) + "%"}
            </BarPercentage>
            <ProgressBar
              barWidth={120}
              wholeValue={total_supply}
              filler={circulating_supply}
              color="blue"
            />
          </Bar>
        </ItemWrapper>
      </DataWrapper>
    </Container>
  );
}

export default MarketData;
