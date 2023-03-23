import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import modules to test
import FormatChooser from '../../src/components/react/dna/FormatChooser';

describe('test nucleotide counting', () => {
  const user = userEvent.setup();
  let formatBox: HTMLElement;
  let spacerBox: HTMLElement;
  // reset input after each test
  beforeEach(() => {
    render(<FormatChooser />);
    formatBox = screen.getByRole('combobox', {
      name: /format:/i,
    });
    spacerBox = screen.getByRole('combobox', {
      name: /spacer:/i,
    });
  });

  test('check it renders', async () => {
    // define input

    // test
    expect(screen.getByText(/format:/i));
    expect(screen.getByText(/spacer:/i));
  });

  test('check format box works', async () => {
    await user.click(formatBox);
    const option = /three letter \(metileletasp\.\.\.\)/i
    await user.click(screen.getByText(option));
    expect(screen.findByText(option));
  });
  
  test('check spacer box works', async () => {
    await user.click(spacerBox);
    const option = /hyphen \(m\-i\-l\-d\)/i
    await user.click(screen.getByText(option));
    expect(screen.findByText(option));
  });
});
