import { LoadingContainer, Wrapper } from "./LoadingTwoMainCharts.styles";

function LoadingTwoMainCharts({ error = null }) {
  return (
    <Wrapper>
      <LoadingContainer>
        {error ? `Code ${error.status}. ${error.data.error}` : "Loading..."}
      </LoadingContainer>
      <LoadingContainer>
        {error ? `Code ${error.status}. ${error.data.error}` : "Loading..."}
      </LoadingContainer>
    </Wrapper>
  );
}

export default LoadingTwoMainCharts;
