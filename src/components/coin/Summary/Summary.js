import { LeftSquare, CentralSquare, RightSquare } from "components/coin";
import { Title, SquaresWrapper } from "./Summary.styles";

function Summary(props) {
  return (
    <>
      <Title>Your Summary</Title>
      <SquaresWrapper>
        <LeftSquare {...props.coinData} />
        <CentralSquare {...props.coinData} />
        <RightSquare {...props.coinData} />
      </SquaresWrapper>
    </>
  );
}

export default Summary;
