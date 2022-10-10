import { Bar, Progress } from "./ProgressBar.styles";

interface Props {
  filler: number;
  wholeValue: number;
  barWidth: number;
  color?: string;
}

const ProgressBar = ({
  filler,
  wholeValue,
  barWidth,
  color = "grey",
}: Props) => {
  const progressWidth = (filler / wholeValue) * 100;
  return (
    <Bar barWidth={barWidth} color={color}>
      <Progress progressWidth={progressWidth} color={color}></Progress>
    </Bar>
  );
};

export default ProgressBar;
