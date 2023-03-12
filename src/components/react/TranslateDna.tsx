import { useStore } from '@nanostores/react';
import { translateDna } from '../../functions/translateFunction';
import { inputStore } from '../../stores/input';
import { formatChooserStore } from '../../stores/formatChooserStore';
import { useState, useEffect } from 'react';

export default function TranslateDna() {
  const sanitisedInputFromStore = useStore(inputStore);
  const formatChoice = useStore(formatChooserStore);
  const [translatedDna, setTranslatedDna] = useState('');

  useEffect(() => {
    setTranslatedDna(translateDna(sanitisedInputFromStore));
  }, [sanitisedInputFromStore, formatChoice]);

  return <div className="outputBox">{translatedDna}</div>;
}
