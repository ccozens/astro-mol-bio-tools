import { checkDnaInput } from './checkDnaInput';
import { Molecule } from '../types';

export const transcribe = (sanitisedInputFromStore: string) => {
      // check input
      const checkedInput = checkDnaInput(sanitisedInputFromStore, Molecule.Dna);
      if (checkedInput.includes('Non-DNA')) {
         return checkedInput; }
  return sanitisedInputFromStore.replaceAll('T', 'U');
};

