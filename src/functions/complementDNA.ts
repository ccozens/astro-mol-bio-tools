import { Molecule } from './utilFunctions';
import { checkDnaInput } from './checkCheckDnaInput';

export function complementDNA(dna: string) {
  const checkedDna = checkDnaInput(dna, Molecule.Dna);
  if (checkedDna.includes('Non-DNA')) {
    return checkedDna;
  }

  const dnaArray = Array.from(checkedDna);
  let dnaComplementary: string[] = [];
  dnaArray.forEach((x) => {
    if (x === 'A') {
      dnaComplementary.push('T');
    } else if (x === 'C') {
      dnaComplementary.push('G');
    } else if (x === 'G') {
      dnaComplementary.push('C');
    } else if (x === 'T') {
      dnaComplementary.push('A');
    }
  });
  return dnaComplementary.join('');
}
