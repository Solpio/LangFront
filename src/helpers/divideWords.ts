export function divideWords(str: string) {
  const ab = str.match(/<.*>/gm)
  const mas = str.split(`${ab}`)
  const a = ab ? ab[0]?.slice(3, ab[0].length - 4) : null
  return { mas, a }
}
