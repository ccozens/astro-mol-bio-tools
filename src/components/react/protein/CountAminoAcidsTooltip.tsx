import { TooltipProps } from 'recharts';

export function CountAminoAcidsTooltip({ payload, active, label}: TooltipProps<number, string>) {
/*     const tooltipStyle = {
      color: 'var(--accent)',
      // backgroundColor: 'black',a
      borderRadius: '5px',
      opacity: 0.8,
      height: '1em',
      margin: 'auto',
      // padding: 0
    }
    
    const tooltipText = {
      // color: 'var(--accent)',
    } */
    if (active && payload && payload[0].value) {
      return (
        <div className="countAminoAcidsTooltip">
          <p className='countAminoAcidsTooltipLabel'>{`${label} : ${payload?.[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  }