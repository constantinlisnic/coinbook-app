import styled from "styled-components";

export const Img = styled.img`
  width: 34px;
`;

export const Td = styled.td`
  padding: 10px;
  padding-left: 0;
  padding-right: 20px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.cellBorderColor};
`;

export const AboveBarText = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

export const GreenColorText = styled.div`
  color: ${(props) => props.theme.green};
`;
export const RedColorText = styled.div`
  color: ${(props) => props.theme.red};
`;

export const PriceChangeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) =>
    props.priceChange > 0 ? props.theme.green : props.theme.red};
`;

export const LeftText = styled.div`
  color: #82869e;
`;
export const RightText = styled.div`
  color: #b4b9d4;
`;
