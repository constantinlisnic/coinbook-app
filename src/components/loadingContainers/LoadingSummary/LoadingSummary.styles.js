import styled from "styled-components";

export const Title = styled.div`
  font-size: 22px;
  margin: auto;
  max-width: 1150px;
`;

export const SquaresWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px auto;
  width: 1185px;
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

export const LinkWrapper = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 280px;
  height: 65px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeftSquareContainer = styled.div`
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CentralSquareContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 380px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSquareContainer = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 460px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  box-sizing: border-box;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
  background: ${(props) => props.theme.secondary};
  padding: 25px 40px 50px;
  width: 1185px;
  margin: auto;
  margin-bottom: 30px;
  border-radius: 15px;
`;
