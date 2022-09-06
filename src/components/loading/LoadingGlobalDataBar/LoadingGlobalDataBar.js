import { Container } from "./LoadingGlobalDataBar.styles";

function LoadingGlobalDataBar({ error = "" }) {
  return error ? (
    <Container>
      <div>{error}</div>
    </Container>
  ) : (
    <Container>
      <div>Loading...</div>
    </Container>
  );
}

export default LoadingGlobalDataBar;
