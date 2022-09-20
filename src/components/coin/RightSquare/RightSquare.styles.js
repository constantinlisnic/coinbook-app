import styled from "styled-components";
import { PaperAirplaneIcon as BulletPoint } from "@heroicons/react/24/outline";

export const Container = styled.div`
  background: ${(props) => props.theme.secondary};
  border-radius: 15px;
  width: 480px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
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
  display: flex;
  width: 300px;
  height: 12px;
  border: 1px solid ${(props) => props.theme.barBorder};
  border-radius: 15px;
  overflow: hidden;
  background: #003249;
`;

export const SupplyFiller = styled.div`
  height: 100%;
  width: ${(props) => props.barWidth}%;
  background: #007ea7;
  border-radius: 15px;
`;

export const VolumeFiller = styled.div`
  height: 100%;
  width: ${(props) => (300 * props.barWidth) / 100}px;
  border-radius: 15px;
  background: #80ced7;
`;

export const PercentageWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: ${(props) => (300 * props.divWidth) / 100}px;
`;

export const SupplyPercentage = styled.div`
  color: #007ea7;
  font-weight: bold;
`;

export const VolumePercentage = styled.div`
  color: #80ced7;
  font-weight: bold;
`;

export const InfinityDiv = styled.div`
  margin: auto;
`;
