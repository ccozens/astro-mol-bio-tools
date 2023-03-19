export const sanitiseThreeLetterInput = (input: string) => {
  // if FASTA, remove first line by splicing at first new line
  const fastaHeadRemoved = input.startsWith('>')
    ? input.slice(input.indexOf('\n'))
    : input;
  // remove star at end (if present), any spacers (dash, space, period or comma), line breaks and carriage returns
  const sanitisedThreeLetterInput =
    fastaHeadRemoved.at(-1) === '*'
      ? fastaHeadRemoved.replace(/[- .,\r\n]/g, '').slice(0, -1)
      : fastaHeadRemoved.replace(/[- .,\r\n]/g, '');

  return sanitisedThreeLetterInput;
};

