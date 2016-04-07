var mongoose        = require('mongoose')

var user = new mongoose.Schema({
   id: {
       type: String,
       required: true,
       index: {
           unique: true
       }
    },
    card: {
        type: String,
        required: true,
        index: {
           unique: true
       }
    }
})

module.exports = {
    userModel: mongoose.model('user', user)
}