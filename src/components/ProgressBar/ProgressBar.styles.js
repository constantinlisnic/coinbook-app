import styled from "styled-components";

export const Bar = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.barWidth}px;
  height: 8px;
  background: white;
  border: 1px solid ${(props) => props.theme.barBorder};
  border-radius: 15px;
  overflow: hidden;
  background: ${(props) => props.theme.bar};
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progressWidth}%;
  background: ${(props) => props.theme.progress};
  border-radius: 15px;
`;
