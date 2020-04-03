const axios = require('axios')

class ApiController {
    static findContent(req, res){
        const city = req.params.city
        let weather = ''
        let detikNews = ''
        axios.get(`https://api.weatherbit.io/v2.0/current?city=${city}&key=${process.env.APIKEY}`)
            .then(result => {
                // console.log(result.data)
                const {data} = result
                weather = data
                return axios.get(`https://newsapi.org/v2/everything?domains=detik.com&apiKey=${process.env.APIKEYNEWS}`)
            })
            .then(result => {
                const {data} = result
                detikNews = data
                return res.status(200).json({
                    Weather: weather,
                    News: detikNews
                })
            })
            .catch(err => res.status(500).json(err))
    }
        
}

module.exports = ApiController