import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
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
  const dispatch = useAppDispatch();
  const { name: currencyName } = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  const page = useAppSelector((state) => state.fullTable.page);

  const { tableData, isLoading, errorMessage } = useAppSelector(
    (state) => state.fullTable
  );

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
          dataLength={tableData.length}
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
                <TableRow {...coin} key={coin.id} />
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
