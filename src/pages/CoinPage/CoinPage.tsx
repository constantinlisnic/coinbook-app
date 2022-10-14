import { WholePage } from "components/coin";

function CoinPage(props: { match: { params: { coinId: string } } }) {
  return <WholePage coinId={props.match.params.coinId} />;
}

export default CoinPage;
