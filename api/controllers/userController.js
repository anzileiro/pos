var md5                 = require('md5')
,   userModel           = require('../models/userModel')
,   attendanceModel     = require('../models/attendanceModel')
,   conf                = require('../configurations/conf.js')

var userController = {
    register: function (request, response) {
        
        var user = new userModel.userModel()
        
        user.id = md5(request.body.id + conf.key.hash)
        user.card = md5(request.body.card + conf.key.hash)
        
        user.save(function (error) {
            if(error){
                response.status(500).json({
                    status: 500,
                    message: 'error ocurred',
                    object: error
                })
                return
            }else{
                response.status(201).json({
                    status: 201,
                    message: 'created',
                    object: {
                        user:{
                            id: request.body.id
                        }
                    }
                })
                return
            }
        })
    },
    attendance: function (request, response) {
        
        var id = md5(request.body.id + conf.key.hash)
        
        var date = new Date()
        var today = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
        
        userModel.userModel.findOne({ id: id }, function (error, result) {
            if(error){
                response.status(500).json({
                    status: 500,
                    message: 'error ocurred',
                    object: error
                })
                return   
            }else{
                if(!result){
                    response.status(404).json({
                        status: 404,
                        message: 'not found'
                    })
                    return
                }else{
                    var attendance = new attendanceModel.attendanceModel()
                        
                    attendance.id = id
                    attendance.date = today
                        
                    attendance.save(function (error) {
                        if(error){
                            response.status(500).json({
                                status: 500,
                                message: 'error',
                                object: error
                            })
                            return
                        }else{
                            response.status(201).json({
                                status: 201,
                                message: 'created',
                                object: {
                                    attendance: {
                                        id: id,
                                        date: today
                                    }
                                }
                            })
                         }
                    })   
                }
            }
        })
        
    }
}

module.exports = {
    userController: userController
}