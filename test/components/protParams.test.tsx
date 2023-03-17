// MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK

import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import { Molecule } from '../../src/types';
import Input from '../../src/components/react/Input';
import CountAminoAcids from '../../src/components/react/protein/CountAminoAcids';
import ProteinParameters from '../../src/components/react/protein/ProteinParameters';
import type { ResponsiveContainerProps} from 'recharts';
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { CountAminoAcidsTooltip } from '../../src/components/react/protein/CountAminoAcidsTooltip';


const testData = [
  {count: 0, ratio: 0, key: 'A'},
  {count: 0, ratio: 0, key: 'R'},
  {count: 0, ratio: 0, key: 'N'},
  {count: 1, ratio: 0.25, key: 'D'},
  {count: 0, ratio: 0, key: 'C'},
  {count: 0, ratio: 0, key: 'E'},
  {count: 0, ratio: 0, key: 'Q'},
  {count: 0, ratio: 0, key: 'G'},
  {count: 0, ratio: 0, key: 'H'},
  {count: 1, ratio: 0.25, key: 'I'},
  {count: 1, ratio: 0.25, key: 'L'},
  {count: 0, ratio: 0, key: 'K'},
  {count: 1, ratio: 0.25, key: 'M'},
  {count: 0, ratio: 0, key: 'F'},
  {count: 0, ratio: 0, key: 'P'},
  {count: 0, ratio: 0, key: 'S'},
  {count: 0, ratio: 0, key: 'T'},
  {count: 0, ratio: 0, key: 'W'},
  {count: 0, ratio: 0, key: 'Y'},
  {count: 0, ratio: 0, key: 'V'},
  ];


vi.mock('recharts', async () => {
  const mockRecharts = await vi.importActual<any>('recharts');
  return {
    ...mockRecharts,
    ResponsiveContainer: ({ children }: ResponsiveContainerProps) => (
      <mockRecharts.ResponsiveContainer width={800} height={800}>
              <BarChart
        className="proteinBar"
        data={testData}
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
      </mockRecharts.ResponsiveContainer>
    ),
  };
});



describe('test CountAminoAcids', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for Protein parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Protein}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for Protein parameters'
    );
  });

  test('test error message', async () => {
    // define input
    const protein = 'AAQTXRTLGUGVCGC';

    // enter DNA into input box
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<CountAminoAcids ariaLabelContent={'Amino acid count'} />);

    // expected output
    const expected =
      'Non-amino acid character entered, please enter natural AAs only. Non-natural AA at positions: 5, 10.';
    // test
    expect(screen.getByText(expected));
  });

  test('test correct axis rendering', async () => {
    // define input
    const protein =
    'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';
    // const protein = 'MILD';    // enter DNA into input box
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<CountAminoAcids ariaLabelContent={'Amino acid count'} />);
    
    // expected output
    const yAxisOne = 0.065;
    const yAxisTwo = 0.13;
    const yAxisThree = 0.195;
    const yAxisFour = 0.26;

    // test
    expect(screen.getByText(yAxisOne));
    expect(screen.getByText(yAxisTwo));
    expect(screen.getByText(yAxisThree));
    expect(screen.getByText(yAxisFour));
  });

  /* test('test tooltip on hover', async () => {
    // define input
    // const protein =
      'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';
    const protein = 'MILD';


    // enter DNA into input box
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<CountAminoAcids ariaLabelContent={'Amino acid count'} />);
    screen.logTestingPlaygroundURL();
    // userEvent.hover(screen.getByText(/hover over me/i))
    // expect(screen.getByText(/tooltip text/i)).toBeInTheDocument()

    const bars = document.querySelectorAll('.recharts-rectangle');
    console.log('here' +bars[0])
    // expected output
    await userEvent.hover(bars[0]);

    // test
    expect(await screen.findByText('D: 0.25')).toBeVisible();
    // expect(screen.getByText('A:'));
    // expect(screen.getByText(yAxisTwo));
    // expect(screen.getByText(yAxisThree));
  }); */


});

describe('test ProteinParameters', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(
      <Input
        ariaLabelContent={'DNA input form for Protein parameters'}
        placeholderText={'Enter DNA sequence here...'}
        inputType={Molecule.Protein}
      />
    );
    inputBox = screen.getByLabelText(
      'DNA input form for Protein parameters'
    );
  });

  test('test protein1', async () => {
    const protein = 'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';
    // const protein = 'MILD';    // enter DNA into input box
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<ProteinParameters ariaLabelContent={'Protein parameters'} />);
    screen.logTestingPlaygroundURL();
    //expected
    const mw = 8.53;
    const extinctionCoefficientCysPaired = /10102\.00/i;
    const extinctionCoefficientCysReduced = /9977\.00/i;
    const absCysPaired = 1.18;
    const absCysReduced = 1.17;
    //test
    screen.getByText(mw);
    screen.getByText(extinctionCoefficientCysPaired);
    screen.getByText(extinctionCoefficientCysReduced);
    screen.getByText(absCysPaired);
    screen.getByText(absCysReduced);
  })

  test('test protein2', async () => {
    const protein = 'RPIEVWKLYFTHPQDVPAIRDKIKEHPAVVDIYEYDIPFAKRYLIDKGLIPMEGDEELKMLAFDIETLYHEGEEFAEGPILMISYADEEGARVITWKNIDLPYVDVVSTEKEMIKRFLKVVKEKDPDVLITYNGDNFDFAYLKKRSEKLGVKFILGREGSEPKIQRMGDRFAVEVKGRIHFDLYPVIRRTINLPTYTLEAVYEAIFGQPKEKVYAEEIAQAWETGEGLERVARYSMEDAKVTYELGKEFFPMEAQLSRLVGQSLWDVSRSSTGNLVEWFLLRKAYERNELAPNKPDERELARRRESYAGGYVKEPERGLWENI';
    // const protein = 'MILD';    // enter DNA into input box
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<ProteinParameters ariaLabelContent={'Protein parameters'} />);
    screen.logTestingPlaygroundURL();
    //expected
    const mw = 37.71;
    const extinctionCoefficientCysPaired = /59945\.00/i;
    const extinctionCoefficientCysReduced = /59820\.00/i;
    const absCysPaired = 1.59;
    const absCysReduced = 1.59;
    //test
    screen.getByText(mw);
    screen.getByText(extinctionCoefficientCysPaired);
    screen.getByText(extinctionCoefficientCysReduced);
    screen.getByText(absCysPaired);
    screen.getByText(absCysReduced);
  })
  })
  
