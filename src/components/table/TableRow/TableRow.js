import numeral from "numeral";
import { Sparkline, DisplayPriceChange } from "components/table";
import { ProgressBar } from "components";
import {
  Img,
  Td,
  AboveBarText,
  NameWrapper,
  LeftText,
  RightText,
} from "./TableRow.styles";

function TableRow({ coin }) {
  return (
    <tr>
      <Td>{coin.market_cap_rank}</Td>
      <Td>
        <NameWrapper>
          <Img src={`${coin.image}`} alt="" />
          <div>
            {coin.name} ({coin.symbol.toUpperCase()})
          </div>
        </NameWrapper>
      </Td>
      <Td>{numeral(coin.current_price).format("$0,0.00")}</Td>
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
            {numeral(coin.total_volume).format("($0.00a)").toLocaleUpperCase()}{" "}
          </LeftText>
          <RightText>
            {numeral(coin.market_cap).format("($0.00a)").toLocaleUpperCase()}
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
        <Sparkline {...coin} />
      </Td>
    </tr>
  );
}

export default TableRow;
