interface StringLikeFilter {
  like: string
}

interface StringEqFilter {
  eq: string
}

interface NumberCompFilter {
  gr?: number
  le?: number
}

interface NumberEqFilter {
  eq: number
}