import numeral from "numeral";
import { useAppSelector } from "hooks";
import { CoinProps } from "CoinProps";
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

function TableRow(props: CoinProps) {
  const { symbol: currencySymbol } = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  return (
    <tr>
      <Td>{props.market_cap_rank}</Td>
      <Td>
        <StyledLink to={`/coin/${props.id}`}>
          <NameWrapper>
            <Img src={`${props.image}`} alt="" />
            <div>
              {props.name} ({props.symbol?.toUpperCase()})
            </div>
          </NameWrapper>
        </StyledLink>
      </Td>
      <Td>
        <StyledLink to={`/coin/${props.id}`}>
          {props.current_price?.toString().includes("e")
            ? currencySymbol + "0.000000..."
            : currencySymbol +
              numeral(props.current_price).format("0,0.00[00000000]")}
        </StyledLink>
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={props.price_change_percentage_1h_in_currency}
        />
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={props.price_change_percentage_24h_in_currency}
        />
      </Td>
      <Td>
        <DisplayPriceChange
          priceChange={props.price_change_percentage_7d_in_currency}
        />
      </Td>
      <Td>
        <AboveBarText>
          <LeftText>
            {currencySymbol +
              numeral(props.total_volume)
                .format("(0.00a)")
                .toLocaleUpperCase()}{" "}
          </LeftText>
          <RightText>
            {currencySymbol +
              numeral(props.market_cap).format("(0.00a)").toLocaleUpperCase()}
          </RightText>
        </AboveBarText>
        <ProgressBar
          barWidth={170}
          filler={props.total_volume}
          wholeValue={props.market_cap}
        />
      </Td>
      <Td>
        <AboveBarText>
          <LeftText>
            {numeral(props.circulating_supply)
              .format("(0.00a)")
              .toLocaleUpperCase()}{" "}
          </LeftText>
          <RightText>
            {numeral(props.total_supply).format("(0.00a)").toLocaleUpperCase()}{" "}
          </RightText>
        </AboveBarText>
        <ProgressBar
          barWidth={170}
          filler={props.circulating_supply}
          wholeValue={props.total_supply}
        />
      </Td>
      <Td>
        <StyledLink to={`/coin/${props.id}`}>
          <Sparkline {...props} />
        </StyledLink>
      </Td>
    </tr>
  );
}

export default TableRow;
