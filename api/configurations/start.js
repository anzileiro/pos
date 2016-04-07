var conf        = require('./conf.js')
,   start       = require('./api.js')

start.api.set('port', conf.server.port);

var up = start.api.listen(start.api.get('port'), function () {
    console.log('Application started on http://localhost:' + up.address().port);
})