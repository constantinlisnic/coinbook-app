import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { getURL } from "utils";
import { TableHead, TableRow } from "components/table";
import { LoadingFullTable } from "components/loadingContainers";
import { Table, TableContainer } from "./FullTable.styles";

class FullTable extends React.Component {
  state = {
    tableData: [],
    isLoading: false,
    errorMessage: null,
    page: 1,
    loadingMoreCoins: false,
  };

  getTableData = async () => {
    const { tableData, loadingMoreCoins } = this.state;
    try {
      !loadingMoreCoins && this.setState({ isLoading: true });
      const path = "coins/markets";
      const config = {
        vs_currency: this.props.currency.name,
        order: "market_cap_desc",
        per_page: 20,
        page: this.state.page,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      };
      const url = getURL(path, config);
      const { data } = await axios(url);
      if (!loadingMoreCoins) {
        this.setState({ tableData: [...data], isLoading: false });
      } else {
        this.setState({
          tableData: [...tableData, ...data],
          loadingMoreCoins: false,
        });
      }
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }
  };

  componentDidMount() {
    this.getTableData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.currency.name !== prevProps.currency.name ||
      this.state.page !== prevState.page
    ) {
      this.getTableData();
    }
  }

  render() {
    const isFetched = !this.state.isLoading && this.state.tableData.length;
    return (
      <TableContainer>
        {isFetched ? (
          <InfiniteScroll
            dataLength={this.state.tableData}
            next={() =>
              this.setState({
                loadingMoreCoins: true,
                page: this.state.page + 1,
              })
            }
            hasMore={true}
            scrollThreshold={1}
            loader={
              <h4 style={{ textAlign: "center" }}>Loading more coins...</h4>
            }
          >
            <Table>
              <TableHead />
              <tbody>
                {this.state.tableData.map((coin) => (
                  <TableRow
                    coin={coin}
                    key={coin.id}
                    symbol={this.props.currency.symbol}
                  />
                ))}
              </tbody>
            </Table>
          </InfiniteScroll>
        ) : (
          <LoadingFullTable error={this.state.errorMessage} />
        )}
      </TableContainer>
    );
  }
}

export default FullTable;
