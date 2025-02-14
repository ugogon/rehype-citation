declare namespace _default {
  export { constants }
  export namespace types {
    export { biblatex }
    export { bibtex }
  }
  export namespace parse {
    const biblatex_1: boolean
    export { biblatex_1 as biblatex }
    export const strict: boolean
    export const sentenceCase: string
  }
  export namespace format {
    const useIdAsLabel: boolean
  }
}
export default _default
import * as constants from './input/constants.js'
import biblatex from './mapping/biblatexTypes.json'
import bibtex from './mapping/bibtexTypes.json'
