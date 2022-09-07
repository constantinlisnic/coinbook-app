import { Bar, Progress } from "./ProgressBar.styles";

function ProgressBar({ filler = null, wholeValue = null, barWidth = null }) {
  const progressWidth = (filler / wholeValue) * 100;
  return (
    <Bar barWidth={barWidth}>
      <Progress progressWidth={progressWidth}></Progress>
    </Bar>
  );
}

export default ProgressBar;
