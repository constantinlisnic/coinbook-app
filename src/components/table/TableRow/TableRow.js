import numeral from "numeral";
import { useSelector } from "react-redux";
import { Sparkline } from "components/table";
import { ProgressBar, DisplayPriceChange } from "components";
import {
  Img,
  Td,
  AboveBarText,
  NameWrapper,
  LeftText,
  RightText,
  StyledLink,
} from "./TableRow.styles";

function TableRow({ coin }) {
  const { symbol: currencySymbol } = useSelector(
    (state) => state.settings.activeCurrency
  );
  return (
    <tr>
      <Td>{coin.market_cap_rank}</Td>
      <Td>
        <StyledLink to={`/coin/${coin.id}`}>
          <NameWrapper>
            <Img src={`${coin.image}`} alt="" />
            <div>
              {coin.name} ({coin.symbol.toUpperCase()})
            </div>
          </NameWrapper>
        </StyledLink>
      </Td>
      <Td>
        <StyledLink to={`/coin/${coin.id}`}>
          {coin.current_price.toString().includes("e")
            ? currencySymbol + "0.000000..."
            : currencySymbol +
              numeral(coin.current_price).format("0,0.00[00000000]")}
        </StyledLink>
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={coin.price_change_percentage_1h_in_currency}
        />
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={coin.price_change_percentage_24h_in_currency}
        />
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={coin.price_change_percentage_7d_in_currency}
        />
      </Td>
      <Td>
        <AboveBarText>
          <LeftText>
            {currencySymbol +
              numeral(coin.total_volume)
                .format("(0.00a)")
                .toLocaleUpperCase()}{" "}
          </LeftText>
          <RightText>
            {currencySymbol +
              numeral(coin.market_cap).format("(0.00a)").toLocaleUpperCase()}
          </RightText>
        </AboveBarText>
        <ProgressBar
          barWidth={170}
          filler={coin.total_volume}
          wholeValue={coin.market_cap}
        />
      </Td>
      <Td>
        <AboveBarText>
          <LeftText>
            {numeral(coin.circulating_supply)
              .format("(0.00a)")
              .toLocaleUpperCase()}{" "}
          </LeftText>
          <RightText>
            {numeral(coin.total_supply).format("(0.00a)").toLocaleUpperCase()}{" "}
          </RightText>
        </AboveBarText>
        <ProgressBar
          barWidth={170}
          filler={coin.circulating_supply}
          wholeValue={coin.total_supply}
        />
      </Td>
      <Td>
        <StyledLink to={`/coin/${coin.id}`}>
          <Sparkline {...coin} />
        </StyledLink>
      </Td>
    </tr>
  );
}

export default TableRow;
