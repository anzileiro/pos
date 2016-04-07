var express         = require('express')
,   mongoose        = require('mongoose')
,   route          = require('./route.js')
,   bodyparser      = require('body-parser')
,   conf            = require('./conf.js')
,   api             = express()

mongoose.connect(conf.conn.mongodb)                    

api.use(bodyparser.json())

api.use(bodyparser.urlencoded({
    extended: false
}))

api.use('/api/v1', route.router)

module.exports = {
    api: api
}