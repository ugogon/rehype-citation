function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object)
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object)
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable
      })),
      keys.push.apply(keys, symbols)
  }
  return keys
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {}
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key])
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key))
        })
  }
  return target
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key)
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    })
  } else {
    obj[key] = value
  }
  return obj
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, 'string')
  return typeof key === 'symbol' ? key : String(key)
}
function _toPrimitive(input, hint) {
  if (typeof input !== 'object' || input === null) return input
  var prim = input[Symbol.toPrimitive]
  if (prim !== undefined) {
    var res = prim.call(input, hint || 'default')
    if (typeof res !== 'object') return res
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (hint === 'string' ? String : Number)(input)
}
const BOOK = new Set(['book', 'inbook', 'bookinbook', 'suppbook'])
const BOOK_PART = new Set(['inbook', 'bookinbook', 'suppbook'])
const COLLECTION = new Set([
  'collection',
  'reference',
  'incollection',
  'inreference',
  'suppcollection',
])
const COLLECTION_PART = new Set(['incollection', 'inreference', 'suppcollection'])
const PROCEEDINGS = new Set(['proceedings', 'inproceedings'])
const PROCEEDINGS_PART = new Set(['inproceedings'])
const PERIODICAL_PART = new Set(['article', 'suppperiodical'])
const TITLE_MAP = {
  mvbook: ['main', BOOK],
  mvcollection: ['main', COLLECTION],
  mvreference: ['main', COLLECTION],
  mvproceedings: ['main', PROCEEDINGS],
  book: ['book', BOOK_PART],
  collection: ['book', COLLECTION_PART],
  reference: ['book', COLLECTION_PART],
  proceedings: ['book', PROCEEDINGS_PART],
  periodical: ['journal', PERIODICAL_PART],
}
export function crossref(target, entry, registry) {
  if (entry.crossref in registry) {
    const parent = registry[entry.crossref]
    if (parent.properties === entry) {
      return entry
    }
    const data = _objectSpread({}, crossref(parent.type, parent.properties, registry))
    delete data.ids
    delete data.crossref
    delete data.xref
    delete data.entryset
    delete data.entrysubtype
    delete data.execute
    delete data.label
    delete data.options
    delete data.presort
    delete data.related
    delete data.relatedoptions
    delete data.relatedstring
    delete data.relatedtype
    delete data.shortand
    delete data.shortandintro
    delete data.sortkey
    if ((parent.type === 'mvbook' || parent.type === 'book') && BOOK_PART.has(target)) {
      data.bookauthor = data.author
    }
    if (parent.type in TITLE_MAP) {
      const [prefix, targets] = TITLE_MAP[parent.type]
      if (targets.has(target)) {
        data[prefix + 'title'] = data.title
        data[prefix + 'subtitle'] = data.subtitle
        if (prefix !== 'journal') {
          data[prefix + 'titleaddon'] = data.titleaddon
        }
        delete data.title
        delete data.subtitle
        delete data.titleaddon
        delete data.shorttitle
        delete data.sorttitle
        delete data.indextitle
        delete data.indexsorttitle
      }
    }
    return Object.assign(data, entry)
  }
  return entry
}
