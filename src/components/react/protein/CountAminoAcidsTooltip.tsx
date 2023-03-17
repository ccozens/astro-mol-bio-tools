import type { TooltipProps } from 'recharts';

export function CountAminoAcidsTooltip({ payload, active, label}: TooltipProps<number, string>) {
    if (active && payload && payload[0].value) {
      return (
        <div className="countAminoAcidsTooltip">
          <p className='countAminoAcidsTooltipLabel'>{`${label} : ${payload?.[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  }