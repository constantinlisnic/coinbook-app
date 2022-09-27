import {
  LeftSquare,
  CentralSquare,
  RightSquare,
  Description,
} from "components/coin";
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
      <Description {...props.coinData} />
    </>
  );
}

export default Summary;
