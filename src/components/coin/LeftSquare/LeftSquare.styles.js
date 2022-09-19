import styled from "styled-components";

export const Container = styled.div`
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

export const CoinWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 220px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-direction: column;
`;

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 220px;
  height: 60px;
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
`;
