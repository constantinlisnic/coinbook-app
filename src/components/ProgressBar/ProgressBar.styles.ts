import styled from "styled-components";

interface BarProps {
  barWidth: number;
}

interface ProgressProps {
  progressWidth: number;
}

export const Bar = styled.div<BarProps>`
  box-sizing: border-box;
  width: ${(props) => props.barWidth}px;
  height: 8px;
  background: white;
  border: 1px solid ${(props) => props.theme.barBorder};
  border-radius: 15px;
  overflow: hidden;
  background: ${(props) =>
    props.color === "blue" ? props.theme.blueBar : props.theme.bar};
`;

export const Progress = styled.div<ProgressProps>`
  height: 100%;
  width: ${(props) => props.progressWidth}%;
  background: ${(props) =>
    props.color === "blue" ? props.theme.blueProgress : props.theme.progress};
  border-radius: 15px;
`;
