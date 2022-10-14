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

function LoadingSymmary({ error = null }: any) {
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
          {error
            ? `Status: ${error.status}. ${error.error || error.data.error}`
            : "Loading..."}
        </div>
      </DescriptionContainer>
    </>
  );
}

export default LoadingSymmary;
