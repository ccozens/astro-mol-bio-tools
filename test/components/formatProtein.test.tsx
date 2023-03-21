// MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK

import { describe, test, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import { Molecule } from '../../src/types';
import FormatProtein from '../../src/components/react/protein/FormatProtein';

describe('test FormatProtein one to three letter', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    // render page
    render(<FormatProtein ariaLabelContent={'Format protein'} />);
    // set inputBox
    inputBox = screen.getByLabelText('Protein input');
  });

  test('test error message', async () => {
    // define input
    const protein = 'AAQTXRTLGUGVCGC';

    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);

    // expected output
    const expected =
      'Non-amino acid character entered, please enter natural AAs only. Non-natural AA at positions: 5, 10.';
    // test
    expect(screen.getByText(expected));
  });

  test('test one to three letter transformation', async () => {
    // define input
    const oneLetter =
      'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';

    await user.type(inputBox, oneLetter);
    expect(inputBox).toHaveValue(oneLetter);
    // render output
    render(<FormatProtein ariaLabelContent={'Format protein'} />);

    // expected output
    const threeLetter =
      'MetProLysCysProLysCysAsnLysGluValTyrPheAlaGluArgValThrSerLeuGlyLysAspTrpHisArgProCysLeuLysCysGluLysCysGlyLysThrLeuThrSerGlyGlyHisAlaGluHisGluGlyLysProTyrCysAsnHisProCysTyrAlaAlaMetPheGlyProLysGlyPheGlyArgGlyGlyAlaGluSerHisThrPheLys';

    // test
    expect(screen.getByText(threeLetter));
  });
});

describe('test FormatProtein one to three letter', () => {
  const user = userEvent.setup();
  let inputBox: HTMLElement;
  let formatButton: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    // render page
    render(<FormatProtein ariaLabelContent={'Format protein'} />);
    // set inputBox
    inputBox = screen.getByLabelText('Protein input');
    // define button
    formatButton = screen.getByText(
      /three \-> one letter \(metileleuasp \-> mild\)/i
    );
  });

  test('test error message for incomplete three letter codes', async () => {
    const notThreeLetter = 'MetProLy';

    // switch format
    await user.click(formatButton);

    await user.type(inputBox, notThreeLetter);
    expect(inputBox).toHaveValue(notThreeLetter);
    
    // render output
    render(<FormatProtein ariaLabelContent={'Format protein'} />);
    // expected output
    const expected =
      'Three letter protein is not a multiple of 3, please enter a valid protein sequence.';
    // test
    expect(screen.getByText(expected));
  });

  test('test error message for invalid three letter codes', async () => {
    const protein = 'MetIleWeeLeuAsp';
    await user.type(inputBox, protein);
    expect(inputBox).toHaveValue(protein);
    // render output
    render(<FormatProtein ariaLabelContent={'Format protein'} />);
    // expected output
    const expected =
      'Non-amino acid character entered, please enter natural AAs only. Non-natural AA at positions: 3.';
  });

  test('three to one letter transformation', async () => {
    // define input
    const threeLetter =
      'MetProLysCysProLysCysAsnLysGluValTyrPheAlaGluArgValThrSerLeuGlyLysAspTrpHisArgProCysLeuLysCysGluLysCysGlyLysThrLeuThrSerGlyGlyHisAlaGluHisGluGlyLysProTyrCysAsnHisProCysTyrAlaAlaMetPheGlyProLysGlyPheGlyArgGlyGlyAlaGluSerHisThrPheLys';

    await user.type(inputBox, threeLetter);
    expect(inputBox).toHaveValue(threeLetter);
    await user.click(formatButton);
    // render output
    render(<FormatProtein ariaLabelContent={'Format protein'} />);

    // expected output
    const oneLetter =
      'MPKCPKCNKEVYFAERVTSLGKDWHRPCLKCEKCGKTLTSGGHAEHEGKPYCNHPCYAAMFGPKGFGRGGAESHTFK';

    // test
    expect(screen.getByText(oneLetter));
  });
});
