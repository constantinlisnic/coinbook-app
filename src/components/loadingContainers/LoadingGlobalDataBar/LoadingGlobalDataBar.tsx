import { Props } from "../LoadingTwoMainCharts/LoadingTwoMainCharts";
import { Container } from "./LoadingGlobalDataBar.styles";

function LoadingGlobalDataBar({ error = null }: Props) {
  return (
    <Container>
      <div>
        {error
          ? `Status: ${error.status}. ${error.error || error.data.error}`
          : "Loading..."}
      </div>
    </Container>
  );
}

export default LoadingGlobalDataBar;
