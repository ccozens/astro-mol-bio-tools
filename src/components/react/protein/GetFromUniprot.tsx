import { useState, ChangeEvent, MouseEvent, useEffect } from 'react';
import { fetchedInputStore } from '../../../stores/fetchedInputStore';

import type { InputLabelProps } from '../../../types';

export default function GetFromUniprot({
  ariaLabelContent,
  placeholderText,
}: InputLabelProps) {
  // store input as state, linked to input box value={search}
  const [search, setSearch] = useState('');
  const [fetchedAccession, setFetchedAccession] = useState('');
  const [fetchedSequence, setFetchedSequence] = useState('');
  const [fetchedProteinName, setFetchedProteinName] = useState('');
  const [fetchedOrganismName, setFetchedOrganismName] = useState('');

  function handleInput(e: ChangeEvent<HTMLInputElement>): void {
    setSearch(e.target.value);
  }

  // re-run search when box reselected
  function handleClick(e: MouseEvent<HTMLInputElement>): void {
    setSearch(e.currentTarget.value);
    if (search !== '') {
      fetchProtein(search);
    }
  }

  // send fetch request when user finished typing
  useEffect(() => {
    if (search !== '') {
      const timer = setTimeout(() => {
        fetchProtein(search);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [search]);

  // fetch protein sequence from Uniprot
  async function fetchProtein(search: string) {
    const response = await fetch(
      `https://www.ebi.ac.uk/proteins/api/proteins/${search}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    if (response.ok) {
      const data = await response.json();
      // set variables from parsed json
      setFetchedAccession(data.accession);
      setFetchedSequence(data.sequence['sequence']);
      setFetchedProteinName(
        data.protein.recommendedName.fullName.value
      );
      setFetchedOrganismName(data.organism.names[0].value);
    }
  }

    // set inputStore to fetched protein sequence
    if (fetchedAccession.includes(search.toUpperCase())) {
      fetchedInputStore.set(fetchedSequence);
    }
    // if no sequence found, set inputStore to empty string
    else if (!fetchedAccession.includes(search.toUpperCase())) {
      fetchedInputStore.set('');
    }
  

  const fetchBlurb = 
  <div className="fetchOutputBox">
  <p>
    Fetched accession {fetchedAccession} : {fetchedProteinName}{' '}
    from <em>{fetchedOrganismName}</em>
  </p>
</div>

  return (
    <div>
      <label htmlFor="uniprotId">
        Get a sequence by Uniprot accession:
      </label>
      <input
        className="fetchAccessionInput"
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
      {fetchedAccession !== '' ? fetchBlurb : null}
    </div>
  );
}
