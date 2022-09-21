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

function LoadingSymmary({ error = "" }) {
  return (
    <>
      <Title>Your Summary</Title>
      <SquaresWrapper>
        <LeftSquareContainer>
          <CoinWrapper></CoinWrapper>
          <LinkWrapper></LinkWrapper>
        </LeftSquareContainer>
        <CentralSquareContainer>
          {error ? error : "Loading..."}
        </CentralSquareContainer>
        <RightSquareContainer></RightSquareContainer>
      </SquaresWrapper>
      <DescriptionContainer>
        <img
          src="https://i.ibb.co/vz0fLdP/Icon-awesome-layer-group.png"
          alt="stack icon"
        />
        <div>{error ? error : "Loading..."}</div>
      </DescriptionContainer>
    </>
  );
}

export default LoadingSymmary;
