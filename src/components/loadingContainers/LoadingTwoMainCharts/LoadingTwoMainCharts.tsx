import { LoadingContainer, Wrapper } from "./LoadingTwoMainCharts.styles";

function LoadingTwoMainCharts({ error = null }: any) {
  return (
    <Wrapper>
      <LoadingContainer>
        {error
          ? `Status: ${error.status}. ${error.error || error.data.error}`
          : "Loading..."}
      </LoadingContainer>
      <LoadingContainer>
        {error
          ? `Status: ${error.status}. ${error.error || error.data.error}`
          : "Loading..."}
      </LoadingContainer>
    </Wrapper>
  );
}

export default LoadingTwoMainCharts;
