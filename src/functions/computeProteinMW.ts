import { aaMW } from './lookupTables'
  
  export const computeProteinMW = (proteinArray: string[]) => {
  // calc MW
    let proteinMW = 0;
    
    proteinArray.forEach((pos: any) => {
      proteinMW += aaMW[pos];
    });
    const waterMW = 18.0107946;
    let protMW = proteinMW+waterMW;

    return (
      protMW
    );
  };

  