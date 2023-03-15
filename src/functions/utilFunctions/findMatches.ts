export const findMatches = (input: string, molecule: number) => {
  let searchRegex: RegExp = /[^ACGT]/gi;

  if (molecule === 0) searchRegex = /[^ARNDCEQGHILKMFPSTWYV]/gi;
  if (molecule === 1) searchRegex = /[^ACGT]/gi;
  if (molecule === 2) searchRegex = /[^ACGU]/gi;

  const matches = input.matchAll(searchRegex);
  
  const indexes = [];
  for (const match of matches) {
    if (match.index) indexes.push(match.index + 1);
  }
  return indexes.join(', ');
};
