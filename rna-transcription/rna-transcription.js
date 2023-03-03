const DNA_RNA_MAP = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
}
export const toRna = (dna) => dna.split('').map(char => DNA_RNA_MAP[char]).join('')
