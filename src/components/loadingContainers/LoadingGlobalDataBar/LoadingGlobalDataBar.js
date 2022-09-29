import { Container } from "./LoadingGlobalDataBar.styles";

function LoadingGlobalDataBar({ error = null }) {
  return (
    <Container>
      <div>
        {error ? `Code ${error.status}. ${error.data.error}` : "Loading..."}
      </div>
    </Container>
  );
}

export default LoadingGlobalDataBar;
