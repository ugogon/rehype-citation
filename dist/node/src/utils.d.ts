export const isNode: boolean
export function readFile(path: any): Promise<string>
export function isValidHttpUrl(str: string): boolean
export function getBibliography(
  options: import('./generator.js').Options,
  file: import('vfile').VFile
): Promise<string>
export function loadCSL(Cite: any, format: string, root?: string): Promise<string>
export function loadLocale(Cite: any, format: string, root?: string): Promise<string>
export function getCitationFormat(
  citeproc: any
): 'note' | 'author-date' | 'author' | 'numeric' | 'label'
export function getSortedRelevantRegistryItems(
  citeproc: any,
  relevantIds: string[],
  sorted: boolean
): any
export function split(str: string, index: number): string[]
export function isSameAuthor(item: any, item2: any): boolean
