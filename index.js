if (typeof window !== 'undefined') {
  window.decomp = window.decomp || require('poly-decomp')
} else if (typeof global !== 'undefined') {
  global.decomp = global.decomp || require('poly-decomp')
}
