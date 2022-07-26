import {parseSchema} from "../src/schema.js"
import { readFileSync } from "fs"

/**
 * 
 * Proto Test
 * 
 * 
 */
describe("ma première suite de tests", () => {
  test("mon premier test", () => {
    const file = readFileSync("SampleDir/simpleJSON.html", "utf8")
    const expected = [{"@context":"http://schema.org","@type":"Person","address":{"@type":"PostalAddress","addressLocality":"Seattle","addressRegion":"WA","postalCode":"98052","streetAddress":"20341 Whitworth Institute 405 N. Whitworth"},"colleague":["http://www.xyz.edu/students/alicejones.html","http://www.xyz.edu/students/bobsmith.html"],"email":"mailto:jane-doe@xyz.edu","image":"janedoe.jpg","jobTitle":"Professor","name":"Jane Doe","telephone":"(425) 123-4567","url":"http://www.janedoe.com"},{"@context":"http://schema.org","@type":"LocalBusiness","address":{"@type":"PostalAddress","addressLocality":"Mexico Beach","addressRegion":"FL","streetAddress":"3102 Highway 98"},"description":"A superb collection of fine gifts and clothing to accent your stay in Mexico Beach.","name":"Beachwalk Beachwear & Giftware","telephone":"850-648-4200"}]
    expect(parseSchema(file)).toEqual(expected)
  })
})