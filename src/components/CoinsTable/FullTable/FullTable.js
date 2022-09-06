import React from "react";
import axios from "axios";
import { getURL } from "utils";
import { TableHead, TableRow } from "components/CoinsTable";

class FullTable extends React.Component {
  state = {
    tableData: null,
    isLoading: false,
    errorMessage: null,
  };

  getTableData = async () => {
    try {
      this.setState({ isLoading: true });
      const path = "coins/markets";
      const config = {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: 10,
        page: 1,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      };
      const url = getURL(path, config);
      const response = await axios(url);
      this.setState({ tableData: response.data, isLoading: false });
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getTableData();
  }

  render() {
    const haveData = !this.state.isLoading && this.state.tableData;
    return (
      <div>
        <table>
          <TableHead />
          {haveData &&
            this.state.tableData.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
        </table>
      </div>
    );
  }
}

export default FullTable;
