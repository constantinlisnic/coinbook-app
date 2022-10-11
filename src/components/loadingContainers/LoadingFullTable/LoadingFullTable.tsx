import { Container } from "./LoadingFullTable.styles";

function LoadingFullTable({ error = null }: { error: string | null }) {
  return (
    <Container>
      <div>{error ? error : "Loading..."}</div>
    </Container>
  );
}
export default LoadingFullTable;
