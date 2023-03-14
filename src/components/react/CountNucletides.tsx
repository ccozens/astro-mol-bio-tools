import { useStore } from '@nanostores/react';
import { countNucleotides } from '../../functions/utilFunctions/countNucleotides';
import { inputStore } from '../../stores/input';
import type { InputLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function CountNucleotides({
  ariaLabelContent
}: InputLabelProps) {

  const sanitisedInputFromStore = useStore(inputStore);
  console.log(sanitisedInputFromStore);
  const ntCounts = countNucleotides(sanitisedInputFromStore);
  // type RnaNtCounts = Omit<NtCounts, "T"> & { U: NtCounts["T"] };

  const gridRows = Object.keys(ntCounts);
  gridRows.splice(3, 1, "U"); // replace "T" with "U"
  const counts = Object.values(ntCounts);
  
  function copyNtCounts(e: MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText(JSON.stringify(ntCounts));
  }

  return (
    <div className="innerOutputBox" aria-label={ariaLabelContent}>
      <p className="countHeading">Nucleotide Counts</p>
      <hr />
      <div className="outputGrid">
        <div className="gridItem"></div>
        <div className="gridItem">Counts</div>
        <div className="gridItem">Ratios</div>
        <div className="gridItem">{gridRows[0]}</div>
        <div className="gridItem">{counts[0].count}</div>
        <div className="gridItem">
          {Number(counts[0].ratio).toFixed(2)}
        </div>
        <div className="gridItem">{gridRows[1]}</div>
        <div className="gridItem">{counts[1].count}</div>
        <div className="gridItem">
          {Number(counts[1].ratio).toFixed(2)}
        </div>
        <div className="gridItem">{gridRows[2]}</div>
        <div className="gridItem">{counts[2].count}</div>
        <div className="gridItem">
          {Number(counts[2].ratio).toFixed(2)}
        </div>
        <div className="gridItem">{gridRows[3]}</div>
        <div className="gridItem">{counts[3].count}</div>
        <div className="gridItem">
          {Number(counts[3].ratio).toFixed(2)}
        </div>
        <div className="gridItem">{gridRows[4]}</div>
        <div className="gridItem">{counts[4]}</div>
        <div className="gridCopyButton">
          <span
            className="material-symbols-outlined"
            onClick={copyNtCounts}
          >
            content_copy
          <span className="copyTip">Copy data</span>
          </span>
        </div>
        <div className="gridItem">{gridRows[5]}</div>
        <div className="gridItem">{Number(counts[5]).toFixed(2)}</div>
        <div className="gridItem"></div>
      </div>
    </div>
  );
}
