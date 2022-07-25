import { argv } from "process"
import { readFileSync } from "fs"
import { parseSchema } from "../src/schema.js"



if (argv.length > 2) {
  const file = readFileSync(argv[2], "utf8")
  console.log(parseSchema(file))
}
  