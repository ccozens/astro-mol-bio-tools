import { rest } from 'msw';

// Mock Data
export const proteinInfo =
  {
    message: 'Fetched accession P33333 : 1-acyl-sn-glycerol-3-phosphate acyltransferase from Saccharomyces cerevisiae (strain ATCC 204508 / S288c)',
    sequence: 'MSVIGRFLYYLRSVLVVLALAGCGFYGVIASILCTLIGKQHLAQWITARCFYHVMKLMLGLDVKVVGEENLAKKPYIMIANHQSTLDIFMLGRIFPPGCTVTAKKSLKYVPFLGWFMALSGTYFLDRSKRQEAIDTLNKGLENVKKNKRALWVFPEGTRSYTSELTMLPFKKGAFHLAQQGKIPIVPVVVSNTSTLVSPKYGVFNRGCMIVRILKPISTENLTKDKIGEFAEKVRDQMVDTLKEIGYSPAINDTTLPPQAIEYAALQHDKKVNKKIKNEPVPSVSISNDVNTHNEGSSVKKMH',
    length: 303
  };


export const restHandler = [
    rest.get('https://www.ebi.ac.uk/proteins/api/proteins/P33333', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(
        proteinInfo
      ),
    );
  }),
];
