import { computeProteinMW } from './computeProteinMW';
import { absCoefficients } from './lookupTables';
import { countAminoAcids } from './utilFunctions/countAminoAcids';

// destructure import
const [extTyr, extTrp, extCys_paired, extCys_reduced] = [
  absCoefficients.extTyr,
  absCoefficients.extTrp,
  absCoefficients.extCys_paired,
  absCoefficients.extCys_reduced,
];

// coefficients for proteins in water measured at 280 nm

export const computeExtinctionCoefficients = (
  protein: string
) => {

  // call proteinMW
  const proteinMW = computeProteinMW(Array.from(protein));

  // count amino acids
  const aminoAcidCounts = countAminoAcids(protein);

  const extinctionCoefficientCysPaired =
    aminoAcidCounts.W.count * extTrp + // number tryptophans
    aminoAcidCounts.Y.count * extTyr + // number tyrosines
    (aminoAcidCounts.C.count + extCys_paired); // number cysteines

  const extinctionCoefficientCysReduced =
    aminoAcidCounts.W.count * extTrp +
    aminoAcidCounts.Y.count * extTyr +
    (aminoAcidCounts.C.count + extCys_reduced);

  
  const absCysPaired = extinctionCoefficientCysPaired / proteinMW;
  const absCysReduced = extinctionCoefficientCysReduced / proteinMW;

  return { extinctionCoefficientCysPaired, extinctionCoefficientCysReduced, absCysPaired, absCysReduced };
};
