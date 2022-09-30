import {
  Title,
  SquaresWrapper,
  CoinWrapper,
  LinkWrapper,
  LeftSquareContainer,
  CentralSquareContainer,
  RightSquareContainer,
  DescriptionContainer,
} from "./LoadingSummary.styles";

function LoadingSymmary({ errorCoin = null }) {
  return (
    <>
      <Title>Your Summary</Title>
      <SquaresWrapper>
        <LeftSquareContainer>
          <CoinWrapper></CoinWrapper>
          <LinkWrapper></LinkWrapper>
        </LeftSquareContainer>
        <CentralSquareContainer>{"Loading..."}</CentralSquareContainer>
        <RightSquareContainer></RightSquareContainer>
      </SquaresWrapper>
      <DescriptionContainer>
        <img
          src="https://i.ibb.co/vz0fLdP/Icon-awesome-layer-group.png"
          alt="stack icon"
        />
        <div>
          {errorCoin
            ? `Code ${errorCoin.status}. ${errorCoin.data.error}`
            : "Loading..."}
        </div>
      </DescriptionContainer>
    </>
  );
}

export default LoadingSymmary;
