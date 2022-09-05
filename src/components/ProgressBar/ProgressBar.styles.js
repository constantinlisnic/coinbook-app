import styled from "styled-components";

export const Bar = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 10px;
  background: white;
  border: 1px solid #1f2128;
  border-radius: 15px;
  overflow: hidden;
`;

export const Progress = styled.div`
  height: 100%;
  width: ${(props) => props.width}%;
  background: #2172e5;
  border-radius: 15px;
`;
