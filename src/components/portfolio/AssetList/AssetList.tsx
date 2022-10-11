import { useEffect, memo } from "react";
import { useAppSelector, useAppDispatch } from "hooks";
import { MarketData, AssetData } from "components/portfolio";
import { getPortfolioData, deleteCoin } from "store/portfolioSlice";
import { PortfolioCoinProps } from "PortfolioCoinProps";
import {
  Container,
  CoinIMG,
  CoinNameWrapper,
  ImgWrapper,
  CoinWrapper,
  DataWrapper,
  DeleteIcon,
  EmptyPortfolioWrapper,
  WrongDateWrapper,
} from "./AssetList.styles";

function Asset(props: PortfolioCoinProps) {
  const dispatch = useAppDispatch();
  const { image, name, symbol } = props.marketData[0];
  const handleDelete = () => dispatch(deleteCoin(props.id));

  return (
    <Container>
      <CoinWrapper>
        <ImgWrapper>
          <CoinIMG src={image} alt={`${props.id} icon`} />
        </ImgWrapper>
        <CoinNameWrapper>
          {name} ({symbol?.toUpperCase()})
        </CoinNameWrapper>
        <DeleteIcon onClick={handleDelete} />
      </CoinWrapper>

      <DataWrapper>
        <MarketData {...props.marketData} />
        {props.historyData.market_data ? (
          <AssetData
            marketData={props.marketData}
            historyData={props.historyData}
            purchaseAmount={props.purchaseAmount}
            purchaseDate={props.purchaseDate}
          />
        ) : (
          <WrongDateWrapper>
            Purchase date exceeds the coin's deployment date.
          </WrongDateWrapper>
        )}
      </DataWrapper>
    </Container>
  );
}

function AssetList() {
  const dispatch = useAppDispatch();
  const activeCurrency = useAppSelector(
    (state) => state.settings.activeCurrency
  );
  const { savedCoins, isLoading, isError } = useAppSelector(
    (state) => state.portfolio
  );

  useEffect(() => {
    dispatch(getPortfolioData());
    // eslint-disable-next-line
  }, [activeCurrency]);

  const isFetched = !isLoading && !isError && savedCoins.length;
  return (
    <>
      {isFetched ? (
        savedCoins.map((coin) => {
          return <Asset key={coin.id} {...coin} />;
        })
      ) : (
        <EmptyPortfolioWrapper>
          {savedCoins.length ? "Loading..." : "No Assets."}
        </EmptyPortfolioWrapper>
      )}
    </>
  );
}

export default memo(AssetList);
