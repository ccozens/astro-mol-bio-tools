export const transcribe = (dna: string) => {
  return dna.includes('Non-DNA character entered, please enter ATCG only')
    ? dna
    : dna.replaceAll('T', 'U');
};

