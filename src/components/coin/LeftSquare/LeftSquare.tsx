import { IndividualCoinProps as Props } from "IndividualCoinProps";
import {
  Container,
  ImgWrapper,
  CoinWrapper,
  LinkWrapper,
  StyledLink,
  RankDiv,
  LinkIcon,
} from "./LeftSquare.styles";

function LeftSquare(props: Props) {
  return (
    <Container>
      <CoinWrapper>
        <ImgWrapper>
          <img src={props.image.small} alt={`${props.id} icon`} />
        </ImgWrapper>
        <div>
          {props.name} ({props.symbol.toUpperCase()})
        </div>
        <RankDiv>
          {props.market_cap_rank ? (
            <># {props.market_cap_rank}</>
          ) : (
            "No data..."
          )}
        </RankDiv>
      </CoinWrapper>
      <LinkWrapper>
        <StyledLink href={props.links.homepage[0]} target="blank">
          <LinkIcon />
          <div>{props.links.homepage[0].slice(8)}</div>
        </StyledLink>
      </LinkWrapper>
    </Container>
  );
}

export default LeftSquare;
