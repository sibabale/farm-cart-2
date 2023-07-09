
import {ProgressBarContianer, Progress} from './progress_bar.styles';

export interface IProgressBarProps {
  progress: number 
}

export default function ProgressBar ({progress}: IProgressBarProps) {

  return (
    <ProgressBarContianer>
      <Progress progress={progress} />
    </ProgressBarContianer>
  );
}
