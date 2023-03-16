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

export function computeExtinctionCoefficients(
  protein: string,
  proteinMW: number
) {
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
  return {
    extinctionCoefficientCysPaired,
    extinctionCoefficientCysReduced,
    absCysPaired,
    absCysReduced,
  };
}
