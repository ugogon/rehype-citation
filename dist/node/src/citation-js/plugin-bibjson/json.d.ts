declare function parseContentMine(data: any): {
  type: any
} & {
  type: string
}
declare function parseBibJson(data: any): {
  type: any
}
export { parseContentMine as quickscrapeRecord, parseBibJson as record }
