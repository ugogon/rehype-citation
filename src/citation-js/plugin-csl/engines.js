import CSL from 'citeproc'
import { templates } from './styles.js'
import { locales } from './locales.js'
const proxied = Symbol.for('proxied')
const getWrapperProxy = function (original) {
  const proxy = function (state, entry) {
    if (state.sys.wrapBibliographyEntry) {
      const [prefix, postfix] = state.sys.wrapBibliographyEntry(this.system_id)
      entry = [prefix, entry, postfix].join('')
    }
    return original.call(this, state, entry)
  }
  proxy[proxied] = true
  return proxy
}
for (const format in CSL.Output.Formats) {
  const original = CSL.Output.Formats[format]['@bibliography/entry']
  if (!original || original[proxied]) {
    continue
  }
  CSL.Output.Formats[format]['@bibliography/entry'] = getWrapperProxy(original)
}
function retrieveLocale(locale) {
  if (locales.has(locale)) {
    return locales.get(locale)
  }
  const unnormalised = locale.replace('-', '_')
  if (locales.has(unnormalised)) {
    return locales.get(unnormalised)
  }
  return {}
}
const engines = {}
const fetchEngine = function (style, locale, styleXml, retrieveItem, retrieveLocale) {
  const engineHash = `${style}|${locale}`
  let engine
  if (engines[engineHash] instanceof CSL.Engine) {
    engine = engines[engineHash]
    engine.sys.retrieveItem = retrieveItem
    engine.updateItems([])
  } else {
    engine = engines[engineHash] = new CSL.Engine(
      {
        retrieveLocale,
        retrieveItem,
      },
      styleXml,
      locale,
      true
    )
  }
  return engine
}
const prepareEngine = function (data, style, locale, format) {
  if (!CSL.Output.Formats[format] || !CSL.Output.Formats[format]['@bibliography/entry']) {
    throw new TypeError(`Cannot find format '${format}'`)
  }
  const items = data.reduce((store, entry) => {
    store[entry.id] = entry
    return store
  }, {})
  const template = templates.get(templates.has(style) ? style : 'apa')
  locale = locales.has(locale) ? locale : undefined
  const callback = function (key) {
    if (Object.prototype.hasOwnProperty.call(items, key)) {
      return items[key]
    } else {
      throw new Error(`Cannot find entry with id '${key}'`)
    }
  }
  const engine = fetchEngine(style, locale, template, callback, retrieveLocale)
  engine.setOutputFormat(format)
  return engine
}
export default prepareEngine
export { fetchEngine }
