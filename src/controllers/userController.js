const jwt = require("jsonwebtoken");
let axios = require("axios")



let getDistrict = async function (req, res) {

    try {
      let dist_id= req.query.district_id
      let date= req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${dist_id}&date=${date}`
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getWheather = async function (req, res) {
    try {
        let loc = req.query.location
        // let apiId= req.query.apiId
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b074a36f3cbbc755e8a056b6b7b13023`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


let getLondonTemp = async function (req, res) {
    try {
        let loc = req.query.location
        // let apiId= req.query.apiId
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=b074a36f3cbbc755e8a056b6b7b13023`
        }
        let result = await axios(options);
        let data = result.data
        let londonTemp = data.main.temp
        londonTempCelcius= Math.round(londonTemp - 273.15)
        res.status(200).send({Location: loc, temparature: `${londonTempCelcius}°C`})
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}



let citiesWheather = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        // let apiId= req.query.apiId
        let output= []
        for(let i=0; i<cities.length; i++){
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=b074a36f3cbbc755e8a056b6b7b13023`
        }
        let result = await axios(options);
        let data = result.data
        let cityTemp= data.main.temp
        output.push({city: cities[i], temp: cityTemp})
      }
      output.sort((a,b)=>a.temp-b.temp)
      // let sorted= output.sort(function(a,b) {return a.temp-b.temp})
      // console.log(output)
      res.status(200).send(output)
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}




let getAllMemes = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options);
        // console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        // console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let memesCreator = async function (req, res) {
    try {
        let temp_id = req.query.template_id
        let userName= req.query.username
        let passWord= req.query.password
        let text0= req.query.text0
        let text1= req.query.text1

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${temp_id}&username=${userName}&password=${passWord}&text0=${text0}&text1=${text1}`
        }
        let result = await axios(options);
        let data = result.data

      // console.log(output)
      res.status(200).send(data)
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getDistrict = getDistrict
module.exports.getWheather = getWheather
module.exports.getLondonTemp = getLondonTemp
module.exports.citiesWheather = citiesWheather
module.exports.memesCreator = memesCreator
module.exports.getAllMemes = getAllMemes
