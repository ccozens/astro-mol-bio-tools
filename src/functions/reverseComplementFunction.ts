import { checkDnaInput } from './checkDnaInput';
import { Molecule } from '../types';

export const reverseComplementDNA = (sanitisedInputFromStore: string) => {
    // check input
    const checkedInput = checkDnaInput(sanitisedInputFromStore, Molecule.Dna);
    if (checkedInput.includes('Non-DNA')) {
       return checkedInput; }

  const splitDna = checkedInput.split('');
  const compDnaArray = splitDna.map((nt) => {
    return { A: 'T', T: 'A', C: 'G', G: 'C' }[nt];
  });
  const revCompArray = compDnaArray.reverse();
  const revCompDnaJoined = revCompArray.join('');
  return revCompDnaJoined;
};
