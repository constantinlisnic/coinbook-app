import {
  LeftSquare,
  CentralSquare,
  RightSquare,
  Description,
} from "components/coin";
import { IndividualCoinProps as Props } from "IndividualCoinProps";
import { Title, SquaresWrapper } from "./Summary.styles";

function Summary(props: Props) {
  return (
    <>
      <Title>Your Summary</Title>
      <SquaresWrapper>
        <LeftSquare {...props} />
        <CentralSquare {...props} />
        <RightSquare {...props} />
      </SquaresWrapper>
      <Description {...props} />
    </>
  );
}

export default Summary;
