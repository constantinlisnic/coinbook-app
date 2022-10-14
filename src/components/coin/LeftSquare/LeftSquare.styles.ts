import styled from "styled-components";

export const Container = styled.div`
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CoinWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 280px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  font-size: 20px;
`;

export const ImgWrapper = styled.div`
  background: ${(props) => props.theme.main};
  border-radius: 12px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 280px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled.a`
  font-size: 13px;
  text-decoration: none;
  color: ${(props) => props.theme.color};
  &:visited {
    color: ${(props) => props.theme.color};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  overflow: hidden;
`;

export const RankDiv = styled.div`
  color: ${(props) => props.theme.secondaryText};
`;

export const LinkIcon = styled.div`
  background: url(${(props) => props.theme.linkIcon});
  width: 13px;
  height: 13px;
`;
