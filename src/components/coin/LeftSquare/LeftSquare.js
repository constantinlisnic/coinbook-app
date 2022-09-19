import {
  Container,
  ImgWrapper,
  CoinWrapper,
  LinkWrapper,
  StyledLink,
} from "./LeftSquare.styles";

function LeftSquare(props) {
  return (
    <Container>
      <CoinWrapper>
        <ImgWrapper>
          <img src={props.image.small} alt={`${props.id} icon`} />
        </ImgWrapper>
        <div>
          {props.name} ({props.symbol.toUpperCase()})
        </div>
      </CoinWrapper>
      <LinkWrapper>
        <StyledLink href={props.links.homepage[0]} target="blank">
          <img
            src="https://i.ibb.co/z8Jb255/Icon-awesome-link.png"
            alt="link icon"
          />{" "}
          <div>{props.links.homepage[0].slice(8)}</div>
        </StyledLink>
      </LinkWrapper>
    </Container>
  );
}

export default LeftSquare;
