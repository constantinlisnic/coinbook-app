import React from "react";
import { Radio } from "antd";
import { Container } from "./RangeSelector.styles";

function RangeSelector(props) {
  const dataRange = [
    { label: "1D", value: "1" },
    { label: "7D", value: "7" },
    { label: "1M", value: "30" },
    { label: "3M", value: "90" },
    { label: "1Y", value: "365" },
    { label: "ALL", value: "max" },
  ];

  const handleChange = (e) => {
    props.handleRangeChange(e.target.value);
  };

  return (
    <Container>
      <Radio.Group options={dataRange} onChange={handleChange} />
    </Container>
  );
}

export default RangeSelector;
