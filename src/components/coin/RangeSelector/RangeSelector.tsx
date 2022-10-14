import React from "react";
import { Container, Button } from "./RangeSelector.styles";

const dataRange = [
  { label: "1D", value: "1" },
  { label: "7D", value: "7" },
  { label: "1M", value: "30" },
  { label: "3M", value: "90" },
  { label: "1Y", value: "365" },
  { label: "ALL", value: "max" },
];

function RangeSelector(props: {
  handleRangeChange: (arg0: string) => void;
  selectedRange: string;
}) {
  const handleClick = (e: any) => {
    props.handleRangeChange(e.target.value);
  };

  return (
    <Container>
      {dataRange.map((el) => {
        return (
          <Button
            key={el.label}
            value={el.value}
            onClick={handleClick}
            selected={props.selectedRange === el.value}
          >
            {el.label}
          </Button>
        );
      })}
    </Container>
  );
}

export default RangeSelector;
