import { dnaRnaStore } from '../../stores/dnaRnaStore';
import type { ChangeEvent } from 'react';


export default function DnaRnaToggleButton() {
  
  function handleToggle (e: ChangeEvent<HTMLInputElement>): void {
    e.target.checked ? dnaRnaStore.set(false) : dnaRnaStore.set(true);
  };

  return (
    <div className="dnaRnaToggleButton" id="dnaRnaToggleButton-1">
      <label>
        <input
          className="dnaRnaToggleCheckbox"
          type="checkbox"
          onChange={handleToggle}
        />
        <div className="knobs"></div>
        <div className="layer"></div>
      </label>
    </div>
  );
}
