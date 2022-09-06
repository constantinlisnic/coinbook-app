import styled from "styled-components";

export const UpGreenCaret = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #00ff0f;
`;

export const DownRedCaret = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid red;
`;

export const DownGreenCaret = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #00ff0f;
`;

export const BulletDot = styled.div`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.color};
`;
