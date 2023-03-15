export const sanitiseInput = (input: string) => {
  // ensure uppercase
  const inputUpper = input.toUpperCase();
  // if FASTA, remove first line by splicing at first new line
  const fastaHeadRemoved = inputUpper.startsWith('>')
    ? inputUpper.slice(inputUpper.indexOf('\n'))
    : inputUpper;
  // remove star at end (if present), any spacers (dash, space, period or comma), line breaks and carriage returns
  const sanitisedInput =
    fastaHeadRemoved.at(-1) === '*'
      ? fastaHeadRemoved.replace(/[- .,\r\n]/g, '').slice(0, -1)
      : fastaHeadRemoved.replace(/[- .,\r\n]/g, '');

  return sanitisedInput;
};
