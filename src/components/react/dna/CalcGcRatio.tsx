import { useStore } from '@nanostores/react';
import { transcribe } from '../../../functions/transcribeFunction';
import { inputStore } from '../../../stores/input';


export default function TranscribeDna() {
  const sanitisedInputFromStore = useStore(inputStore);
  // reverse complement checked input
  const transcribedDna = transcribe(sanitisedInputFromStore);

  return <div className="outputBox">{transcribedDna}</div>;
}


