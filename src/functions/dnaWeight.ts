import { transcribe } from './transcribeFunction';
import { ntMW } from './lookupTables';

// approx MW from length
export const approxSsRnaFromLength = (len: number) => {
  return len * ntMW.N + ntMW.triphosphate;
}
export const approxDsRnaFromLength = (len: number) => {
  return len * (ntMW.N*2) + ntMW.triphosphate;
}

export const approxSsDnaFromLength = (len: number) => {
  return len * ntMW.dN + ntMW.monophosphate;
}

export const approxDsDnaFromLength = (len: number) => {
  return len * (ntMW.dN * 2) + (ntMW.monophosphate*2);
}


// approx MW
export const approxSsRnaMw = (dna: string) => {
  const rna = transcribe(dna);
  return rna.length * ntMW.N + ntMW.triphosphate;
};
export const approxDsRnaMw = (dna: string) => {
  const rna = transcribe(dna);
  return rna.length * (ntMW.N *2) + ntMW.triphosphate;
};

export const approxSsDnaMw = (dna: string) => {
  return dna.length * ntMW.dN + ntMW.monophosphate;
};

export const approxDsDnaMw = (dna: string) => {
  return dna.length * (ntMW.dN * 2) + (ntMW.monophosphate*2);
};

// exact MW

export const exactSsRnaMw = (dna: string) => {
  const rna = transcribe(dna);
  let rnaArray = Array.from(rna);
  // calc MW
  let rnaMW = 0;
  rnaArray.forEach((pos) => {
    rnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalRnaMW = rnaMW + phosphate;

  return finalRnaMW;
};
export const exactDsRnaMw = (dna: string) => {
  const rna = transcribe(dna);
  let rnaArray = Array.from(rna);
  // calc MW
  let rnaMW = 0;
  rnaArray.forEach((pos) => {
    rnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalRnaMW = (rnaMW + phosphate)*2;

  return finalRnaMW;
};

export const exactSsDnaMw = (dna: string) => {
  let dnaArray = Array.from(dna).map((char) => 'd' + char); // map appends d to each nt so DNA nts lookedup
  // calc MW
  let dnaMW = 0;
  dnaArray.forEach((pos) => {
    dnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalDnaMW = dnaMW + phosphate;

  return finalDnaMW;
};

export const exactDsDnaMw = (dna: string) => {
  let dnaArray = Array.from(dna).map((char) => 'd' + char); // map appends d to each nt so DNA nts lookedup
  // calc MW
  let dnaMW = 0;
  dnaArray.forEach((pos) => {
    dnaMW += ntMW[pos];
  });
  const phosphate = ntMW.monophosphate;
  let finalDnaMW = (dnaMW + phosphate) * 2;

  return finalDnaMW;
};
