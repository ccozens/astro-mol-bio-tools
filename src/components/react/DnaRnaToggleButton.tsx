import { useState, ChangeEvent } from 'react';

export default function DnaRnaToggleButton() {
  const [switchState, setSwitchState] = useState(true);

  function handleToggle(e: ChangeEvent<HTMLInputElement>) {
    console.log('before' + switchState);
    setSwitchState(!switchState);
    console.log('after' + switchState);
  }
  return (
    <div className="dnaRnaToggleButton" id="dnaRnaToggleButton-1">
      <label>
        <input
          className="dnaRnaToggleCheckbox"
          type="checkbox"
          checked={switchState}
          onChange={handleToggle}
        />

        <div className="knobs"></div>
        <div className="layer"></div>
      </label>
    </div>
  );
}
