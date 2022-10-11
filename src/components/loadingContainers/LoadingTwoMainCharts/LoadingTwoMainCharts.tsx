import { LoadingContainer, Wrapper } from "./LoadingTwoMainCharts.styles";

export interface Props {
  error: {
    status: string;
    error: string;
    data: {
      error: string;
    };
  } | null;
}

function LoadingTwoMainCharts({ error = null }: Props) {
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
