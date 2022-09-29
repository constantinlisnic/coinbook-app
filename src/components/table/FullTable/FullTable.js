import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getTableData,
  loadMoreCoins,
  loadFirstPage,
} from "store/fullTableSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import { TableHead, TableRow } from "components/table";
import { LoadingFullTable } from "components/loadingContainers";
import { Table, TableContainer } from "./FullTable.styles";

function FullTable() {
  const dispatch = useDispatch();
  const { name: currencyName } = useSelector(
    (state) => state.settings.activeCurrency
  );
  const page = useSelector((state) => state.fullTable.page);
  const { tableData, isLoading, errorMessage } = useSelector(
    (state) => state.fullTable
  );

  useEffect(() => {
    dispatch(getTableData(currencyName));
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(loadFirstPage());
    dispatch(getTableData(currencyName));
    // eslint-disable-next-line
  }, [currencyName]);

  useEffect(() => {
    dispatch(getTableData(currencyName));
    // eslint-disable-next-line
  }, [page]);

  const isFetched = !isLoading && tableData.length;
  return (
    <TableContainer>
      {isFetched ? (
        <InfiniteScroll
          dataLength={tableData}
          next={() => {
            dispatch(loadMoreCoins());
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
