const {readFileSync, writeFileSync} = require('fs')
// const fs = require('fs')
// fs.readFileSync

//provide path then what is the encoder
//(UTF-8)

const first =readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync(
'./content/result.-sync.txt', 
`here is the result:${first}, ${second} try lang,`,
{flag: 'a'} //appends the text
)
