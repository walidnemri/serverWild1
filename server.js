const http = require('http');
const url = require('url');

const port = 8000;


const requestHandler = ((request,response) => {
    const parseUrl = url.parse(request.url,true)
    let valReturn = 'Hello, <name> from <city>!'

    if (parseUrl.pathname === '/') {
        if (parseUrl.query && parseUrl.query.name && parseUrl.query.city) {
            valReturn = `Hello,${parseUrl.query.name} from ${parseUrl.query.city}!`
        } else if (parseUrl.query && (!parseUrl.query.name || !parseUrl.query.city)) {
            valReturn = 'Please provide name AND city parameters'
        }
    } else if (parseUrl.pathname === '/about') {
        valReturn = 'This demonstrates routing with Node.js.';
    } else {
        valReturn = 'Default page (URLs other than / and /about)';
      }

    response.end(valReturn)
})


server = http.createServer(requestHandler)

server.listen(port ,(err) => {
    if (err) console.log('error')
    else console.log(`server listen on ${port}`)
})