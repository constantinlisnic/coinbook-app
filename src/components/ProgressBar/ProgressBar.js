import { Bar, Progress } from "./ProgressBar.styles";

function ProgressBar({ filler = null, wholeValue = null }) {
  const width = (filler / wholeValue) * 100;
  return (
    <Bar>
      <Progress width={width}></Progress>
    </Bar>
  );
}

export default ProgressBar;
