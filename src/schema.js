import { parse }  from "parse5"

function parseSchema(htmlString) {
    const dom = parse(htmlString)
    JSONSchema(htmlString)
    debugger
}

function JSONSchema(htmlString){
    const jsonRegex = /type="application\/ld\+json"\s*>(.*?)<\/script>/gsi

    let JSONArray = []
    const results = [...htmlString.matchAll(jsonRegex)]
    results.forEach(result => {
        JSONArray.push(JSON.parse(result[1]))
    })
    // regex for <script type="application/ld+json">(.*?)<\/script>

    return JSONArray
}


export  { parseSchema }