export function genFootnoteSection(
  citationDict: {
    int: string
  },
  footnoteArray: {
    type: 'citation' | 'existing'
    oldId: number
  }[],
  footnoteSection: Element | undefined
): Element
export type Element = import('hast').Element
