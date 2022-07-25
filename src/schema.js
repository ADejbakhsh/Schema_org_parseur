const parse5 = require('parse5')
const { argv } = require('process')
const { readFileSync } = require('fs')

function main(htmlString) {
  const dom = parse5.parse(htmlString)
  debugger;
}

if (argv.length > 2) {
  const file = readFileSync(argv[2], 'utf8')
  console.log(main(file))
}
