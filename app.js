const { response } = require('express')
const request = require('request')
const yargs = require('yargs');

// #################################################################################################
// process one
// const address = process.argv[2]
// // console.log(address)

// const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoianlvdGljaGF1aGFuMjAiLCJhIjoiY2t6b2Y1aGV6NXlyYzJwbXpyMmhhdTNmYyJ9.pcc7ew9eKb4d1KWMoHKpcQ&limit=1'

// request({url:geocodeUrl,json:true},(err,response)=>{
//     if(err){
//         console.log('Unable to connect  service')
//     }else if(response.body.features.length===0){
//         // console.log(response.body)
//         console.log('Undefined because unable to find location')
        
//     }else{
//         latitude = response.body.features[0].center[0]
//         longitude = response.body.features[0].center[1]
//         const url = 'http://api.weatherstack.com/current?access_key=5abd0448849c4d22a0758781231697e9&query='+longitude+','+latitude+'&units=f'
//         request({url:url,json:true},(error,response)=>{
//             if(error){
//                 console.log('Unable to connect webservise.')
//             }else if(response.body.error){
//                 console.log('Something went wrong.....unable to find location')
//                 //low level error hander..
//             }else{
//                 console.log(response.body)
//     }
// })
//     }

// })

// ####################################################################################################
// process two
const mapboxapi = require('./utils/mapboxapi')
const weathercastapi = require('./utils/weathercastapi')

const prompt = require("prompt-sync")({ sigint: true });
// With prompt-sync
const address = prompt("Enter your city name?");
if(!address){
    console.log('Please provide a address..')
}else{
    mapboxapi.mapbox(address,(err,{latitude, longitude, location})=>{
        if(err){
            return console.log(err)
        }else{
            weathercastapi.weathercast(latitude,longitude,(err,forecast)=>{
                if(err){
                    return console.log(err)
                }else{
                    console.log(forecast)
                }

            })

        }

    })
}


        

