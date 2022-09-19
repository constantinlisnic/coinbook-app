import styled from "styled-components";
import { PaperAirplaneIcon as BulletPoint } from "@heroicons/react/24/outline";

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 450px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const StyledBulletPoint = styled(BulletPoint)`
  width: 25px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const ItemName = styled.div`
  color: ${(props) => props.theme.secondaryText};
  font-size: 15px;
`;

export const BarWholeValue = styled.div`
  box-sizing: border-box;
  width: 300px;
  height: 8px;
  background: olive;
  border: 1px solid ${(props) => props.theme.barBorder};
  border-radius: 15px;
  overflow: hidden;
  background: #003249;
`;

export const BarFiller = styled.div`
  height: 100%;
  width: 60%;
  background: #007ea7;
  border-radius: 15px;
`;

export const BarInnerFiller = styled.div`
  height: 100%;
  width: 60%;
  border-radius: 15px;
  background: #80ced7;
`;
