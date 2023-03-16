import { aaMW } from './lookupTables';

export function computeProteinMW(protein: string) {
  let proteinMW = 0;
  const proteinArray = Array.from(protein);

  proteinArray.forEach((pos) => {
    proteinMW += aaMW[pos];
  });
  const waterMW = 18.0107946;
  let protMW = proteinMW + waterMW;

  return protMW;
}