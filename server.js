const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database = require('ronin-database')
const server = ronin.server()

database.connect(process.env.CONNECTION_STRING)
server.use('/', mocks.server(server.Router(), false, false))
server.start()
