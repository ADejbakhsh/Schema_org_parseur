// import { parse }  from "parse5"

/**
 * Find and parse all schema in a html file
 * Remove duplicate if any are present.
 * @param {string} html  raw html as you find it on a webpage
 * @returns {Array<Object>} array of schema
 */
function parseSchema(html) {
    // const dom = parse(html)
    const arrayOfJson = JSONSchema(html)

    removeDuplicateInfo(arrayOfJson)
    return 
}

/**
 * Find and parse json schema in a html file
 * @param {string} html raw html as you find it on a webpage
 * @returns {Array<Object>} array of schema
 */
function JSONSchema(html){
    const jsonRegex = /type="application\/ld\+json"\s*>(.*?)<\/script>/gsi

    let JSONArray = []
    const results = [...html.matchAll(jsonRegex)]
    results.forEach(result => {
        JSONArray.push(JSON.parse(result[1]))
    })
    return JSONArray
}

/**
 * Remove duplicate if any are present.
 * @param {Array<Object>} schemas  array of schema
 * @returns {Array<Object>} array of schema
 */
function removeDuplicateInfo(schemas){

}

export  { parseSchema, JSONSchema }