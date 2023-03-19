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

/*
  function updateOutFormat(e: MouseEvent<HTMLDivElement>) {
    if (oneLetterProtein.length > 0) {
        outFormat === 'oneLetter' ? 'threeLetter' : 'oneLetter';
        threeLetterProtein = threeToOne();
    }
    if (threeLetterProtein.length > 0) {
      oneLetterProtein = oneToThree();
      outFormat === 'threeLetter' ? 'oneLetter' : 'threeLetter';
    } else {
      outFormat === 'oneLetter' ? 'threeLetter' : 'oneLetter';
    }
  }

  function threeToOne() {
    if (threeLetterProtein.length % 3 !== 0) {
      errorMessage = `Three letter protein is not a multiple of 3, please enter a valid protein sequence.`;
      isError = true;
    }
    if (
      checkProteinThreeLetterInput(threeLetterProtein) !==
      threeLetterProtein
    ) {
      errorMessage = `Non-amino acid character entered, please enter natural AAs only.  Non-natural AA at positions: ${checkProteinThreeLetterInput(
        input
      )}.`;
      isError = true;
    }
    if (
      checkProteinThreeLetterInput(threeLetterProtein) ===
      threeLetterProtein
    ) {
      oneLetterProtein = convertThreeToOneLetter(threeLetterProtein);
      isError = false;
    }
    return oneLetterProtein
  }
  function oneToThree() {
    if (
      checkProteinOneLetterInput(oneLetterProtein, 0) ===
      oneLetterProtein
    ) {
      threeLetterProtein = convertOneToThreeLetter(oneLetterProtein);
      isError = false;
    }
    if (
      checkProteinOneLetterInput(oneLetterProtein, 0) !==
      oneLetterProtein
    ) {
      errorMessage = `Non-amino acid character entered, please enter natural AAs only.  Non-natural AA at positions: ${checkProteinOneLetterInput(
        input,
        0
      )}.`;
      isError = true;
    }
    return threeLetterProtein
  }
  */