export function parseDate(date: any): number[]
export function parseMonth(value: any): any[]
export function formatLabel(author: any, issued: any, suffix: any, title: any): string
export const TYPE: 'BibTeX type'
export const LABEL: 'BibTeX label'
export namespace MONTHS {
  const jan: number
  const feb: number
  const mar: number
  const apr: number
  const may: number
  const jun: number
  const jul: number
  const aug: number
  const sep: number
  const oct: number
  const nov: number
  const dec: number
  const january: number
  const february: number
  const march: number
  const april: number
  const june: number
  const july: number
  const august: number
  const september: number
  const october: number
  const november: number
  const december: number
}
export namespace TYPE_KEYS {
  const bathesis: string
  const mathesis: string
  const phdthesis: string
  const candthesis: string
  const techreport: string
  const resreport: string
  const software: string
  const datacd: string
  const audiocd: string
  const patent: string
  const patentde: string
  const patenteu: string
  const patentfr: string
  const patentuk: string
  const patentus: string
  const patreq: string
  const patreqde: string
  const patreqeu: string
  const patreqfr: string
  const patrequk: string
  const patrequs: string
}
export const STANDARD_NUMBERS_PATTERN: RegExp
export namespace Converters {
  namespace PICK {
    function toTarget(...args: any[]): any
    function toTarget(...args: any[]): any
    function toSource(value: any): any[]
    function toSource(value: any): any[]
  }
  namespace DATE {
    function toTarget(date: any):
      | {
          literal: any
          'date-parts'?: undefined
        }
      | {
          'date-parts': any
          literal?: undefined
        }
    function toTarget(date: any):
      | {
          literal: any
          'date-parts'?: undefined
        }
      | {
          'date-parts': any
          literal?: undefined
        }
    function toSource(date: any): any
    function toSource(date: any): any
  }
  namespace YEAR_MONTH {
    function toTarget(
      year: any,
      month: any,
      day: any
    ):
      | {
          literal: any
          'date-parts'?: undefined
        }
      | {
          'date-parts': any[][]
          literal?: undefined
        }
    function toTarget(
      year: any,
      month: any,
      day: any
    ):
      | {
          literal: any
          'date-parts'?: undefined
        }
      | {
          'date-parts': any[][]
          literal?: undefined
        }
    function toSource(date: any): any[]
    function toSource(date: any): any[]
  }
  namespace EPRINT {
    function toTarget(id: any, type: any): any
    function toTarget(id: any, type: any): any
    function toSource(id: any): any[]
    function toSource(id: any): any[]
  }
  namespace EVENT_TITLE {
    function toTarget(title: any, addon: any): any
    function toTarget(title: any, addon: any): any
    function toSource(title: any): any
    function toSource(title: any): any
  }
  namespace HOW_PUBLISHED {
    function toTarget(howPublished: any): any
    function toTarget(howPublished: any): any
  }
  namespace KEYWORDS {
    function toTarget(list: any): any
    function toTarget(list: any): any
    function toSource(list: any): any
    function toSource(list: any): any
  }
  namespace LABEL {
    function toTarget(label: any): any[]
    function toTarget(label: any): any[]
    function toSource(id: any, label: any, author: any, issued: any, suffix: any, title: any): any
    function toSource(id: any, label: any, author: any, issued: any, suffix: any, title: any): any
  }
  namespace NAMES {
    function toTarget(list: any): any
    function toTarget(list: any): any
    function toSource(list: any): any
    function toSource(list: any): any
  }
  namespace PAGES {
    function toTarget(pages: any): any
    function toTarget(pages: any): any
    function toSource(pages: any): any
    function toSource(pages: any): any
  }
  namespace STANDARD_NUMBERS {
    function toTarget(...args: any[]): any
    function toTarget(...args: any[]): any
    function toSource(number: any): any
    function toSource(number: any): any
  }
  namespace STATUS {
    function toSource(state: any): any
    function toSource(state: any): any
  }
  namespace TITLE {
    function toTarget(title: any, subtitle: any, addon: any): any
    function toTarget(title: any, subtitle: any, addon: any): any
    function toSource(title: any): any[]
    function toSource(title: any): any[]
  }
}
