import { useStore } from '@nanostores/react';
import { reverseComplementDNA } from '../../../functions/reverseComplementFunction';
import { inputStore } from '../../../stores/input';
import CopyButton from '../CopyButton';

export default function ReverseComplement() {
  const sanitisedInputFromStore = useStore(inputStore);

  // reverse complement checked input
  const reverseComplement = reverseComplementDNA(
    sanitisedInputFromStore
  );

  return (
    <div>
      <div className="outputBox">{reverseComplement}</div>
      <CopyButton copyButtonContent={reverseComplement} />
    </div>
  );
}