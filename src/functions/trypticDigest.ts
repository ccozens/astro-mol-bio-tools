export const trypticDigest = (protein: string) => {
  const proteinArray = Array.from(protein);
  // cleave where K or R are present, except where either is adjacent to P
  let trypsinSites: number[] = [0];
  let trypsinFragments: string[] = [];

  // list out K + R sites, adding 1 to index as trypsin cuts after K/R
  proteinArray.forEach((pos, idx) => {
    if (
      (proteinArray[idx + 1] !== 'P' && pos === 'K') ||
      (proteinArray[idx + 1] !== 'P' && pos === 'R')
    ) {
      trypsinSites.push(idx + 1);
    }
  });
  // make cuts and store fragments
  trypsinSites.forEach((pos, idx) =>
    trypsinFragments.push(protein.slice(pos, trypsinSites[idx + 1]))
  );

  const trypsinSummary = trypsinSites.map(
    (pos, idx) =>
      trypsinFragments[idx].charAt(trypsinFragments[idx].length - 1) +
      trypsinSites[idx + 1]
  ).slice(0, -1); // last item is undefined and unrequired so this trims off

  return { trypsinSummary, trypsinSites, trypsinFragments };
};
