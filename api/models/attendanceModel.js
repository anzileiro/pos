var mongoose        = require('mongoose')

var date = new Date()
var today = (date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()).toString()

var attendance = new mongoose.Schema({
    id: {
       type: String,
       required: true
    },
    date: {
        type: String,
        default: today
    }
})

module.exports = {
    attendanceModel: mongoose.model('attendance', attendance)
}