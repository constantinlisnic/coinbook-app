import { Bar, Progress } from "./ProgressBar.styles";

function ProgressBar({
  filler = null,
  wholeValue = null,
  barWidth = null,
  color = "grey",
}) {
  const progressWidth = (filler / wholeValue) * 100;
  return (
    <Bar barWidth={barWidth} color={color}>
      <Progress progressWidth={progressWidth} color={color}></Progress>
    </Bar>
  );
}

export default ProgressBar;
