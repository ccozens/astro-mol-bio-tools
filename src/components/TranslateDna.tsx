import { useStore } from '@nanostores/react';
import { translateDna } from '../functions/translateFunction';
import { inputStore } from '../stores/input';
import { formatChooserStore } from '../stores/formatChooserStore';
import { useState, useEffect } from 'react';


export default function TranslateDna() {
  const sanitisedInputFromStore = useStore(inputStore);
  const formatChoice = useStore(formatChooserStore);
  const [translatedDna, setTranslatedDna] = useState('');

  useEffect(() => {
    setTranslatedDna(translateDna(sanitisedInputFromStore))},  [sanitisedInputFromStore, formatChoice]);

  // reverse complement checked input
  // const translatedDna = translateDna(sanitisedInputFromStore);

  return <div className="outputBox">{translatedDna}</div>;
}


/*   // check input and format protein
  const checkedProtein = checkProteinOneLetterInput(input);
  const [protein, setProtein] = useState(checkedProtein);

  // call setProtein to update protein when checked input, outFormat or spacer changes
  useEffect(() => {
    setProtein(checkedProtein);
  }, [checkedProtein]); */