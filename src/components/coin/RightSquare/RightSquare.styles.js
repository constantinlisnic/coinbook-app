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
