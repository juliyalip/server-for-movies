const fetch = require('node-fetch');
require('dotenv').config()

const apiKey = process.env.SECRET_KEY;
const baseUrl = process.env.BASE_URL;

const trendingMovie = async () => {
 const response = await fetch(`${baseUrl}trending/movie/day?api_key=${apiKey}`);
const data = await response.json()
return data.results;
};

module.exports = { trendingMovie };
