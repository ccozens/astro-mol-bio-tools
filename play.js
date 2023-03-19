const aaThreeOneLetterNames = {
    Ala: 'A',
    Arg: 'R',
    Asn: 'N',
    Asp: 'D',
    Cys: 'C',
    Glu: 'E',
    Gln: 'Q',
    Gly: 'G',
    His: 'H',
    Ile: 'I',
    Leu: 'L',
    Lys: 'K',
    Met: 'M',
    Phe: 'F',
    Pro: 'P',
    Ser: 'S',
    Thr: 'T',
    Trp: 'W',
    Tyr: 'Y',
    Val: 'V',
  };
const convertThreeToOneLetter = (protein) => {
    // const protein = sanitiseInput(proteinInput);
    
    // create proteinArray in three character slices
    let proteinArray = [];
    for (let i = 0; i < protein.length; i += 3) {
      proteinArray.push(protein.substring(i, i + 3));
    }
  
    // sanitiseInput capitalises whole string, so return chars 1+2 of each triplet to lower case
    const titleCaseArray = proteinArray.map(
      (aa) => aa[0] + aa[1].toLowerCase() + aa[2].toLowerCase()
    );
  
    const oneLetterArr = [];
    titleCaseArray.map((aminoAcid) => {
      return oneLetterArr.push(aaThreeOneLetterNames[aminoAcid]);
    });
    const oneLetterStr = oneLetterArr.join('');
    return oneLetterStr;
  };



  const test = 'MetIleLeuAspAlaAsp';

  console.log(convertThreeToOneLetter(test));