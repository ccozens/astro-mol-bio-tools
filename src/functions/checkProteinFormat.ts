
export const checkProteinFormat = (proteinInput: string) => {
    if (proteinInput === '') {return ''}
    
    let proteinFormat = 'oneLetter';
    // match protein input to regex
    const regex = /([A-Z][a-z][a-z])/g;
    proteinFormat = proteinInput.match(regex) ? 'threeLetter' : 'oneLetter';
    return proteinFormat;
}

