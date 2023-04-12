[![Netlify Status](https://api.netlify.com/api/v1/badges/bb012ed8-f9cd-4886-ab02-db3e5ddb470b/deploy-status)](https://app.netlify.com/sites/courageous-otter/deploys)<br/>
[![codecov](https://codecov.io/gh/ccozens/astro-mol-bio-tools/branch/main/graph/badge.svg?token=MOQG6B9UNU)](https://codecov.io/gh/ccozens/astro-mol-bio-tools)

# Welcome!

This is a rebuild of [mol-bio-tools](https://github.com/ccozens/mol-bio-tools), seeing as the list of things to change got so long a fresh start seemed easier.

## Tools available

### [Format protein](https://courageous-otter.netlify.app/formatprotein/)

Convert one -> three amino acid code (MILD -> MetIleLeuAsp) and one -> three letter (MetIleLeuAsp -> MILD).

### [Protein parameters](https://courageous-otter.netlify.app/protparams/)

Enter protein sequence or get from uniprot by entering accession. Returns protein length, MW, extinction coeffecients and chart of amino acid ratios.

### [Translate DNA to protein](https://courageous-otter.netlify.app/translate/)

Enter DNA in box, translated protein appears next to it. There are toggles to show output in 1 (MILD...) or 3 (MetIleLeuAsp...) letter code, and for a range of spacers.

### [Transcribe DNA to RNA](https://courageous-otter.netlify.app/transcribe/)

Basically, changes T -> U.

### [Reverse complement DNA](https://courageous-otter.netlify.app/reversecomplement/)

Returns reverse complement of your strand (ATGCAA -> TTGCAT).

### [DNA parameters](https://courageous-otter.netlify.app/dnaparams/)

Enter DNA sequence and it returns nucleotide counts and sequence length, GC ratio, exact and approx single strand and double strand DNA MW.
Or enter a DNA length and it returns an approx weight based on the length.

### [RNA parameters](https://courageous-otter.netlify.app/rnaparams/)

Enter RNA sequence and it returns nucleotide counts and sequence length, GC ratio, exact and approx single strand and double strand RNA MW.
Or enter a RNA length and it returns an approx weight based on the length.

### [Resources](https://courageous-otter.netlify.app/resources/)

Amino acid weights, nucleotide weights and codon table.

## Questions / comments

Please get in touch with feedback / requests. This was my first JS project, so I'd love feedback, and I want it to be useful, so happy to add featues. I've a list of possibles, so do let me know if there are any I could prioritise / you'd like to help you (however you like - via Github, [email](mailto:officechrisgarden@gmail.com), [LinkedIn](https://www.linkedin.com/in/chris-cozens-b2883a45/)). Also, do get in touch with problems/typos.

## Changes from v1

1. CRA -> astro
2. JavaScript -> TypeScript
3. Jest -> Vitest
4. Tailwind -> native CSS
5. Confused mess -> modular (I hope!)

In other words, I haven't changed the functionality though I have changed the layout. I have drastically improved the code quality and stepped into a system that allows server side rendering of at least some of the site.
