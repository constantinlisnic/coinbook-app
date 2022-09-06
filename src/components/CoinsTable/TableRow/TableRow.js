import numeral from "numeral";
import { ProgressBar } from "components";
import { Img } from "./TableRow.styles";
import Sparkline from "../Sparkline";

function TableRow({ coin }) {
  return (
    <tbody>
      <tr>
        <td>{coin.market_cap_rank}</td>
        <td>
          <Img src={`${coin.image}`} alt="" />
          {coin.name} ({coin.symbol.toUpperCase()})
        </td>
        <td>{numeral(coin.current_price).format("$0,0.00")}</td>
        <td>
          {numeral(coin.price_change_percentage_1h_in_currency).format("0.00") +
            "%"}
        </td>
        <td>
          {numeral(coin.price_change_percentage_24h_in_currency).format(
            "0.00"
          ) + "%"}
        </td>
        <td>
          {numeral(coin.price_change_percentage_7d_in_currency).format("0.00") +
            "%"}
        </td>
        <td>
          <div>
            {numeral(coin.total_volume).format("($0.00a)").toLocaleUpperCase()}{" "}
            {numeral(coin.market_cap).format("($0.00a)").toLocaleUpperCase()}
          </div>
          <ProgressBar
            filler={coin.total_volume}
            wholeValue={coin.market_cap}
          />
        </td>
        <td>
          <div>
            {numeral(coin.circulating_supply)
              .format("($0.00a)")
              .toLocaleUpperCase()}{" "}
            {numeral(coin.total_supply).format("($0.00a)").toLocaleUpperCase()}
          </div>
          <ProgressBar
            filler={coin.circulating_supply}
            wholeValue={coin.total_supply}
          />
        </td>
        <td>
          <Sparkline {...coin} />
        </td>
      </tr>
    </tbody>
  );
}

export default TableRow;
