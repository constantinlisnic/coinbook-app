import { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MarketData, AssetData } from "components/portfolio";
import { getPortfolioData, deleteCoin } from "store/portfolioSlice";
import {
  Container,
  CoinIMG,
  CoinNameWrapper,
  ImgWrapper,
  CoinWrapper,
  DataWrapper,
  DeleteIcon,
  EmptyPortfolioWrapper,
} from "./AssetList.styles";

function Asset({ data }) {
  const dispatch = useDispatch();
  const { image, name, symbol } = data.marketData[0];
  const handleDelete = () => dispatch(deleteCoin(data.id));
  return (
    <Container>
      <CoinWrapper>
        <ImgWrapper>
          <CoinIMG src={image} alt={`${data.id} icon`} />
        </ImgWrapper>
        <CoinNameWrapper>
          {name} ({symbol.toUpperCase()})
        </CoinNameWrapper>
        <DeleteIcon onClick={handleDelete} />
      </CoinWrapper>

      <DataWrapper>
        <MarketData marketData={data.marketData[0]} />
        <AssetData
          marketData={data.marketData[0]}
          historyData={data.historyData}
          purchaseAmount={data.purchaseAmount}
          purchaseDate={data.purchaseDate}
        />
      </DataWrapper>
    </Container>
  );
}

function AssetList() {
  const dispatch = useDispatch();
  const activeCurrency = useSelector((state) => state.settings.activeCurrency);
  const { savedCoins, isLoading, isError } = useSelector(
    (state) => state.portfolio
  );

  useEffect(() => {
    dispatch(getPortfolioData());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    dispatch(getPortfolioData());
    // eslint-disable-next-line
  }, [activeCurrency]);

  const isFetched = !isLoading && !isError && savedCoins.length;
  return (
    <>
      {isFetched ? (
        savedCoins.map((coin) => {
          return <Asset key={coin.id} data={coin} />;
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
