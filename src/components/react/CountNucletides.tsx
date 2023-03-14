import { useStore } from '@nanostores/react';
import { countNucleotides } from '../../functions/utilFunctions/countNucleotides';
import { inputStore } from '../../stores/input';
import type { InputLabelProps } from '../../types';
import type { MouseEvent } from 'react';

export default function CountNucleotides({
  ariaLabelContent
}: InputLabelProps) {

  const sanitisedInputFromStore = useStore(inputStore);
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
        <div className="gridItem" aria-label="Alabel">{gridRows[0]}</div>
        <div className="gridItem" aria-label="Acount">{counts[0].count}</div>
        <div className="gridItem" aria-label="Aratio">
          {Number(counts[0].ratio).toFixed(2)}
        </div>
        <div className="gridItem" aria-label="Clabel">{gridRows[1]}</div>
        <div className="gridItem" aria-label="Ccount">{counts[1].count}</div>
        <div className="gridItem" aria-label="Cratio">
          {Number(counts[1].ratio).toFixed(2)}
        </div>
        <div className="gridItem" aria-label="Glabel">{gridRows[2]}</div>
        <div className="gridItem" aria-label="Gcount">{counts[2].count}</div>
        <div className="gridItem" aria-label="Gratio">
          {Number(counts[2].ratio).toFixed(2)}
        </div>
        <div className="gridItem" aria-label="Tlabel">{gridRows[3]}</div>
        <div className="gridItem" aria-label="Tcount">{counts[3].count}</div>
        <div className="gridItem" aria-label="Tratio">
          {Number(counts[3].ratio).toFixed(2)}
        </div>
        <div className="gridItem" aria-label="Totallabel">{gridRows[4]}</div>
        <div className="gridItem" aria-label="Totalcount">{counts[4]}</div>
        <div className="gridCopyButton">
          <span
            className="material-symbols-outlined"
            aria-label="copyNtCounts"
            onClick={copyNtCounts}
          >
            content_copy
          <span className="copyTip">Copy data</span>
          </span>
        </div>
        <div className="gridItem" aria-label="GClabel">{gridRows[5]}</div>
        <div className="gridItem" aria-label="GCcount">{Number(counts[5]).toFixed(2)}</div>
        
      </div>
    </div>
  );
}
