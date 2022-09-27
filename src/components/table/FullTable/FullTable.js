import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { getURL } from "utils";
import { TableHead, TableRow } from "components/table";
import { LoadingFullTable } from "components/loadingContainers";
import { Table, TableContainer } from "./FullTable.styles";

function FullTable() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);
  const [loadingMoreCoins, setLoadingMoreCoins] = useState(false);
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );

  const getTableData = async () => {
    try {
      !loadingMoreCoins && setIsLoading(true);
      const path = "coins/markets";
      const config = {
        vs_currency: currencyName,
        order: "market_cap_desc",
        per_page: 20,
        page: page,
        sparkline: true,
        price_change_percentage: "1h,24h,7d",
      };
      const url = getURL(path, config);
      const { data } = await axios(url);
      if (!loadingMoreCoins) {
        setTableData([...data]);
        setIsLoading(false);
      } else {
        setTableData([...tableData, ...data]);
        setLoadingMoreCoins(false);
      }
    } catch ({ message }) {
      setErrorMessage(message);
    }
  };

  useEffect(() => {
    getTableData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getTableData();
    // eslint-disable-next-line
  }, [currencyName, page]);

  const isFetched = !isLoading && tableData.length;
  return (
    <TableContainer>
      {isFetched ? (
        <InfiniteScroll
          dataLength={tableData}
          next={() => {
            setLoadingMoreCoins(true);
            setPage(page + 1);
          }}
          hasMore={true}
          scrollThreshold={1}
          loader={
            <h4 style={{ textAlign: "center" }}>Loading more coins...</h4>
          }
        >
          <Table>
            <TableHead />
            <tbody>
              {tableData.map((coin) => (
                <TableRow coin={coin} key={coin.id} />
              ))}
            </tbody>
          </Table>
        </InfiniteScroll>
      ) : (
        <LoadingFullTable error={errorMessage} />
      )}
    </TableContainer>
  );
}

export default FullTable;
