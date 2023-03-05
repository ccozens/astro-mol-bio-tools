import { Molecule } from './utilFunctions';
import { checkInput } from './checkInput';

export const reverseComplementDNA = (dna: string) => {
  const checkedDna = checkInput(dna, Molecule.Dna);
  if (checkedDna.includes('Non-DNA')) {
    return checkedDna;
  }

  const splitDna = checkedDna.split('');
  const compDnaArray = splitDna.map((nt) => {
    return { A: 'T', T: 'A', C: 'G', G: 'C' }[nt];
  });
  const revCompArray = compDnaArray.reverse();
  const revCompDnaJoined = revCompArray.join('');
  return revCompDnaJoined;
};
