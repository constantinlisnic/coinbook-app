import styled from "styled-components";

export const Bar = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.barWidth}px;
  height: 8px;
  background: white;
  border: 1px solid #1f2128;
  border-radius: 15px;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.progressWidth}%;
  background: #2172e5;
  border-radius: 15px;
`;
