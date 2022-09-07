import numeral from "numeral";
import { Sparkline } from "components/table";
import { ProgressBar } from "components";
import { Img, Tr, Td, AboveBarText } from "./TableRow.styles";

function TableRow({ coin }) {
  return (
    <tbody>
      <Tr>
        <Td>{coin.market_cap_rank}</Td>
        <Td>
          <Img src={`${coin.image}`} alt="" />
          {coin.name} ({coin.symbol.toUpperCase()})
        </Td>
        <Td>{numeral(coin.current_price).format("$0,0.00")}</Td>
        <Td>
          {numeral(coin.price_change_percentage_1h_in_currency).format("0.00") +
            "%"}
        </Td>
        <Td>
          {numeral(coin.price_change_percentage_24h_in_currency).format(
            "0.00"
          ) + "%"}
        </Td>
        <Td>
          {numeral(coin.price_change_percentage_7d_in_currency).format("0.00") +
            "%"}
        </Td>
        <Td>
          <AboveBarText>
            <div>
              {numeral(coin.total_volume)
                .format("($0.00a)")
                .toLocaleUpperCase()}{" "}
            </div>
            <div>
              {numeral(coin.market_cap).format("($0.00a)").toLocaleUpperCase()}
            </div>
          </AboveBarText>
          <ProgressBar
            barWidth={270}
            filler={coin.total_volume}
            wholeValue={coin.market_cap}
          />
        </Td>
        <Td>
          <AboveBarText>
            <div>
              {numeral(coin.circulating_supply)
                .format("($0.00a)")
                .toLocaleUpperCase()}{" "}
            </div>
            <div>
              {numeral(coin.total_supply)
                .format("($0.00a)")
                .toLocaleUpperCase()}
            </div>
          </AboveBarText>
          <ProgressBar
            barWidth={270}
            filler={coin.circulating_supply}
            wholeValue={coin.total_supply}
          />
        </Td>
        <Td>
          <Sparkline {...coin} />
        </Td>
      </Tr>
    </tbody>
  );
}

export default TableRow;
