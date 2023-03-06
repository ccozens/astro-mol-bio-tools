import { convertThreeToOneLetter } from './convertThreeToOneLetter';
import { computeProteinMW } from './computeProteinMW';
import { absCoefficients } from './lookupTables';
import { countAminoAcids } from './utilFunctions';

// destructure import
const [extTyr, extTrp, extCys_paired, extCys_reduced] = [
  absCoefficients.extTyr,
  absCoefficients.extTrp,
  absCoefficients.extCys_paired,
  absCoefficients.extCys_reduced,
];

// coefficients for proteins in water measured at 280 nm

export const computeExtinctionCoefficients = (
  protein: string,
  outFormat: string,
) => {

  if (outFormat === 'threeLetter') {
    protein = convertThreeToOneLetter(protein);
  }

  // call proteinMW
  const proteinMW = computeProteinMW(Array.from(protein));

  // count amino acids
  const aminoAcidCounts = countAminoAcids(protein);


  const extinctionCoefficientCysPaired =
    aminoAcidCounts.W * extTrp + // number tryptophans
    aminoAcidCounts.Y * extTyr + // number tyrosines
    (aminoAcidCounts.C + extCys_paired); // number cysteines

  const extinctionCoefficientCysReduced =
  aminoAcidCounts.W * extTrp +
  aminoAcidCounts.Y * extTyr +
    (aminoAcidCounts.C + extCys_reduced);

  const absCysPaired = extinctionCoefficientCysPaired / proteinMW;
  const absCysReduced = extinctionCoefficientCysReduced / proteinMW;

  return (
   { absCysPaired, absCysReduced}
  );
};
