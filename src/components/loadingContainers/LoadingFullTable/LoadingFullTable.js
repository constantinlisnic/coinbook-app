import { Container } from "./LoadingFullTable.styles";

function LoadingFullTable({ error }) {
  return (
    <Container>
      <div>{error ? error : "Loading..."}</div>
    </Container>
  );
}
export default LoadingFullTable;
