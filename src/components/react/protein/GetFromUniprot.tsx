import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
// import { inputStore } from '../../../stores/input';
import { fetchedInputStore } from '../../../stores/fetchedInputStore';

import type { InputLabelProps } from '../../../types';

export default function GetFromUniprot({
  ariaLabelContent,
  placeholderText,
}: InputLabelProps) {
  // store input as state, linked to input box value={search}
  const [search, setSearch] = useState('');
  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  // re-run search when box reselected
  function handleClick(e: MouseEvent<HTMLInputElement>): void {
    setSearch(e.currentTarget.value);
    // fetchProtein(search);
  }

  // send fetch request when user finished typing
  useEffect(() => {
    if (search !== ''){
    const timer = setTimeout(() => {
      fetchProtein(search);
    }, 1000);
    return () => clearTimeout(timer);
  }}, [search]);


  // fetch protein sequence from Uniprot
  async function fetchProtein(search: string) {
    const response = await fetch(
      `https://www.uniprot.org/uniprot/${search}.fasta`
    );
    const data = await response.text();
    // set inputStore to fetched protein sequence
    if (data.includes(search.toUpperCase())) {
      fetchedInputStore.set(data);
    //   inputStore.set(data);
    }
    // if no sequence found, set inputStore to empty string
    else if (!data.includes(search.toUpperCase())) {
    //   inputStore.set('');
      fetchedInputStore.set('');
    }
    return data;
  }

  return (
    <div>
      <label htmlFor="uniprotId">Get a sequence from Uniprot:</label>
      <input
        className="fetchInput"
        type="text"
        id="uniprotId"
        name="uniprotId"
        value={search}
        onChange={handleInput}
        onClick={handleClick}
        autoCorrect="new-password" // prevents autocorrection
        spellCheck="false" // removes red squiggles below input
        placeholder={placeholderText}
        maxLength={20}
      />
    </div>
  );
}
