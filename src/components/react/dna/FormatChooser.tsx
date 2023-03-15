import { formatChooserStore } from '../../../stores/formatChooserStore';
import { useEffect, useState } from 'react';
export default function FormatChooser() {
  const [outFormat, setOutFormat] = useState('oneLetter');
  const [spacer, setSpacer] = useState('');
  

  function updateSpacer(e: React.ChangeEvent<HTMLSelectElement>) {
    setSpacer(e.target.value);
  }

  function updateOutFormat(e: React.ChangeEvent<HTMLSelectElement>) {
    setOutFormat(e.target.value);
  }

  useEffect(() => {
    formatChooserStore.set({
      outFormat: outFormat,
      spacer: spacer,
    });
  }, [outFormat, spacer]);

  ;
  return (
    <div className="formatChooser">
      <div className="formatChooser__outFormat">
        <label htmlFor="outFormat"> Format:</label>
        <select id="outFormat" defaultValue="oneLetter" onChange={updateOutFormat}>
          <option value="oneLetter">
            One Letter (MILD...)
          </option>
          <option value="threeLetter">
            Three Letter (MetIleLetAsp...)
          </option>
        </select>
      </div>

      <div className="formatChooser__spacer">
        <label htmlFor="spacer"> Spacer:</label>
        <select id="spacer" defaultValue="" onChange={updateSpacer}>
          <option value="">
            None (MILD...)
          </option>
          <option value=".">Period (M.I.L.D)</option>
          <option value="-">Hyphen (M-I-L-D)</option>
          <option value=" ">Space (M I L D)</option>
        </select>
      </div>
    </div>
  );
}
