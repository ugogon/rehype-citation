export const ref: '@else'
export namespace parsers {
  export { empty }
  export { url }
  export { json }
  export { jquery }
  export { html }
}
export const formats: {
  '@empty/text': {
    parse: typeof empty.parse
    parseType: {
      dataType: string
      predicate: (input: any) => boolean
    }
  }
  '@empty/whitespace+text': {
    parse: typeof empty.parse
    parseType: {
      dataType: string
      predicate: RegExp
    }
  }
  '@empty': {
    parse: typeof empty.parse
    parseType: {
      dataType: string
      predicate: (input: any) => boolean
    }
  }
  '@else/json': {
    parse: typeof json.parse
    parseType: {
      dataType: string
      predicate: RegExp
    }
  }
  '@else/url': {
    parse: typeof url.parse
    parseAsync: typeof url.parseAsync
    parseType: {
      dataType: string
      predicate: RegExp
    }
  }
  '@else/jquery': {
    parse: typeof jquery.parse
    parseType: {
      dataType: string
      predicate(input: any): boolean
    }
  }
  '@else/html': {
    parse: typeof html.parse
    parseType: {
      dataType: string
      predicate(input: any): boolean
    }
  }
}
import * as empty from './empty.js'
import * as url from './url.js'
import * as json from './json.js'
import * as jquery from './jquery.js'
import * as html from './html.js'
