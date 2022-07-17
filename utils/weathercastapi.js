const request = require('request')
const weathercast = (latitude, longitude, arg2)=>{
    // console.log(latitude)
    // console.log(longitude)
    const url = 'http://api.weatherstack.com/current?access_key=5abd0448849c4d22a0758781231697e9&query='+latitude+','+longitude+'&units=f'
    request({url,json:true},(err,{body})=>{
        if(err){
            arg2('Unable to connect to the webservicess..',undefined)
        }else if(body.err){
            arg2('Unable to find location.',undefined)

        }else{
            arg2(undefined,body)
            // arg2(undefined,'It is current '+body.current.temperature+' degress out. There is a '+body.current.observation_time+' % chance of rain.')
        }

    })
}
module.exports={weathercast}