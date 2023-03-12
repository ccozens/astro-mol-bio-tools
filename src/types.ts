export interface InputLabelProps {
  ariaLabelContent: string;
  placeholderText: string;
  inputType: Molecule;
}

export interface AriaLabelProps {
  ariaLabelContent: string;
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
  A: number;
  C: number;
  G: number;
  T: number;
  Total: number;
  GC: number;
}

export interface AminoAcidCounts {
  A: number;
  R: number;
  N: number;
  D: number;
  C: number;
  E: number;
  Q: number;
  G: number;
  H: number;
  I: number;
  L: number;
  K: number;
  M: number;
  F: number;
  P: number;
  S: number;
  T: number;
  W: number;
  Y: number;
  V: number;
}
