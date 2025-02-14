//@ts-nocheck
import * as plugins from '../../plugins/index.js'
import * as util from '../../util/index.js'
import logger from '../../logger.js'
function appendCommas(string, index, array) {
  return string + (index < array.length - 1 ? ',' : '')
}
function getJsonObject(src, dict) {
  const isArray = Array.isArray(src)
  let entries
  if (isArray) {
    entries = src.map((entry) => getJsonValue(entry, dict))
  } else {
    entries = Object.keys(src)
      .filter((prop) => JSON.stringify(src[prop]))
      .map((prop) => `"${prop}": ${getJsonValue(src[prop], dict)}`)
  }
  entries = entries.map(appendCommas).map((entry) => dict.listItem.join(entry))
  entries = dict.list.join(entries.join(''))
  return isArray ? `[${entries}]` : `{${entries}}`
}
function getJsonValue(src, dict) {
  if (typeof src === 'object' && src !== null) {
    if (src.length === 0) {
      return '[]'
    } else if (Object.keys(src).length === 0) {
      return '{}'
    } else {
      return getJsonObject(src, dict)
    }
  } else {
    return JSON.stringify(src)
  }
}
function getJson(src, dict) {
  let entries = src.map((entry) => getJsonObject(entry, dict))
  entries = entries.map(appendCommas).map((entry) => dict.entry.join(entry))
  entries = entries.join('')
  return dict.bibliographyContainer.join(`[${entries}]`)
}
export function getJsonWrapper(src) {
  return getJson(src, plugins.dict.get('html'))
}
export default {
  data(data, { type, format = type || 'text', version = '1.0.2' } = {}) {
    if (version < '1.0.2') {
      data = util.downgradeCsl(data)
    }
    if (format === 'object') {
      return util.deepCopy(data)
    } else if (format === 'text') {
      return JSON.stringify(data, null, 2)
    } else {
      logger.warn(
        '[core]',
        'This feature (JSON output with special formatting) is unstable. See https://github.com/larsgw/citation.js/issues/144'
      )
      return getJson(data, plugins.dict.get(format))
    }
  },
  ndjson(data, { version = '1.0.2' } = {}) {
    if (version < '1.0.2') {
      data = util.downgradeCsl(data)
    }
    return data.map((entry) => JSON.stringify(entry)).join('\n')
  },
}
