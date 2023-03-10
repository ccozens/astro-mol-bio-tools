export const sanitiseInput = (input: string) => {
    // ensure uppercase
    const inputUpper = input.toUpperCase();
    //remove star at end (if present), any spacers (dash, space, period or comma), line breaks and carriage returns
    const sanitisedInput =
      inputUpper.at(-1) === '*'
        ? inputUpper.replace(/[- .,\r\n]/g, '').slice(0, -1)
        : inputUpper.replace(/[- .,\r\n]/g, '');
  
    return sanitisedInput;
  };