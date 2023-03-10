import { useStore } from '@nanostores/react';
import { reverseComplementDNA } from '../../functions/reverseComplementFunction';
import { inputStore } from '../../stores/input';


export default function ReverseComplement() {
  const sanitisedInputFromStore = useStore(inputStore);

  // reverse complement checked input
  const reverseComplement = reverseComplementDNA(sanitisedInputFromStore);

  return <div className="outputBox">{reverseComplement}</div>;
}
