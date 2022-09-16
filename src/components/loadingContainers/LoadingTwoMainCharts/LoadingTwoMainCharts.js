import { LoadingContainer, Wrapper } from "./LoadingTwoMainCharts.styles";

function LoadingTwoMainCharts({ error }) {
  return (
    <Wrapper>
      <LoadingContainer>{error ? error : "Loading..."}</LoadingContainer>
      <LoadingContainer>{error ? error : "Loading..."}</LoadingContainer>
    </Wrapper>
  );
}

export default LoadingTwoMainCharts;
