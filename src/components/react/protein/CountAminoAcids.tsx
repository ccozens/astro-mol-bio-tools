import { useStore } from '@nanostores/react';
import { countAminoAcids } from '../../../functions/utilFunctions/countAminoAcids';
import { inputStore } from '../../../stores/input';
import type { InputLabelProps } from '../../../types';
import type { MouseEvent } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { CountAminoAcidsTooltip } from './CountAminoAcidsTooltip';

export default function CountAminoAcids({
  ariaLabelContent,
}: InputLabelProps) {
  const sanitisedInputFromStore = useStore(inputStore);
  const resiCounts = countAminoAcids(sanitisedInputFromStore);
  const resiCountsArray = Object.entries(resiCounts).map(
    ([key, value]) => {
      // add the key to the value
      return { ...value, key };
    }
  );

  // remove total from resiCountsArray
  const individualResiCountsArray = resiCountsArray.slice(0, -1);
  return (
    <ResponsiveContainer aria-label={ariaLabelContent}>
      <BarChart
        className="proteinBar"
        data={individualResiCountsArray}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <YAxis
          dataKey="ratio"
          tick={{ fill: 'hsl(42, 100%, 50%)' }}
        />
        <XAxis dataKey="key" tick={{ fill: 'hsl(42, 100%, 50%)' }} />
        <Bar dataKey="ratio" fill="hsl(42, 100%, 50%)" />
        <Tooltip
          wrapperStyle={{
            outline: 'none',
          }}
          content={<CountAminoAcidsTooltip />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

/* 
hsl(42, 100%, 50%) = var(--accent)
hsl(42, 100%, 50%) = var(--box-opaque)
*/
