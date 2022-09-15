import { Container } from "./LoadingGlobalDataBar.styles";

function LoadingGlobalDataBar({ error = "" }) {
  return (
    <Container>
      <div>{error ? error : "Loading..."}</div>
    </Container>
  );
}

export default LoadingGlobalDataBar;
