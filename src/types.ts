export interface InputLabelProps {
  ariaLabelContent: string;
  placeholderText?: string;
  inputType?: Molecule;
  proteinFormat?: ProteinFormat
}

export enum ProteinFormat {
    oneLetter,
    threeLetter,
}
export interface ErrorMessageProps {
  errorMessage: string;
}

export interface CopyButtonContentProps {
  copyButtonContent: string;
}

export enum Molecule {
  Protein,
  Dna,
  Rna,
}

export interface NtCounts {
  A: {count: number, ratio: number};
  C: {count: number, ratio: number};
  G: {count: number, ratio: number};
  T: {count: number, ratio: number};
  Total: number;
  GC: number;
}


export interface AminoAcidCounts {
  A: {count: number, ratio: number};
  R: {count: number, ratio: number};
  N: {count: number, ratio: number};
  D: {count: number, ratio: number};
  C: {count: number, ratio: number};
  E: {count: number, ratio: number};
  Q: {count: number, ratio: number};
  G: {count: number, ratio: number};
  H: {count: number, ratio: number};
  I: {count: number, ratio: number};
  L: {count: number, ratio: number};
  K: {count: number, ratio: number};
  M: {count: number, ratio: number};
  F: {count: number, ratio: number};
  P: {count: number, ratio: number};
  S: {count: number, ratio: number};
  T: {count: number, ratio: number};
  W: {count: number, ratio: number};
  Y: {count: number, ratio: number};
  V: {count: number, ratio: number};
  Total: number;
}
