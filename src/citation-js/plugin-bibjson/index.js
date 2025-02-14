import * as json from './json.js'
import { plugins } from '../core/index.js'
const scraperLinks = ['fulltext_html', 'fulltext_xml', 'fulltext_pdf']
const ref = '@bibjson'
const parsers = {
  json,
}
const formats = {
  '@bibjson/quickscrape+record+object': {
    parse: json.quickscrapeRecord,
    parseType: {
      propertyConstraint: {
        props: 'link',
        value(links) {
          return scraperLinks.some((link) => links.find(({ type }) => type === link))
        },
      },
      extends: '@bibjson/record+object',
    },
  },
  '@bibjson/record+object': {
    parse: json.record,
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: [
        {
          props: 'title',
        },
        {
          props: ['author', 'editor'],
          match: 'some',
          value(authors) {
            return Array.isArray(authors) && authors[0] && 'name' in authors[0]
          },
        },
      ],
    },
  },
  '@bibjson/collection+object': {
    parse(collection) {
      return collection.records
    },
    parseType: {
      dataType: 'SimpleObject',
      propertyConstraint: [
        {
          props: 'metadata',
          value(metadata) {
            return 'collection' in metadata
          },
        },
        {
          props: 'records',
          value(records) {
            return Array.isArray(records)
          },
        },
      ],
    },
  },
}
plugins.add(ref, {
  input: formats,
})
export { ref, parsers, formats }
