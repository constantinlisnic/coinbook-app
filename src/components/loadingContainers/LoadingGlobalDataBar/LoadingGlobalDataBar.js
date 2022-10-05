import { Container } from "./LoadingGlobalDataBar.styles";

function LoadingGlobalDataBar({ error = null }) {
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
