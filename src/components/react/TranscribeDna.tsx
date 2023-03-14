import { useStore } from '@nanostores/react';
import { transcribe } from '../../functions/transcribeFunction';
import { inputStore } from '../../stores/input';
import CopyButton from './CopyButton';

export default function TranscribeDna() {
  const sanitisedInputFromStore = useStore(inputStore);
  // reverse complement checked input
  const transcribedDna = transcribe(sanitisedInputFromStore);

  return (
    <div>
      <div className="outputBox">{transcribedDna}</div>
      <CopyButton copyButtonContent={transcribedDna} />
    </div>
  )
}
