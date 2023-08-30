import { default as request } from 'request-promise-native'
import { Price } from '../db'
import { EAppControllerSupportLevel } from 'steam-user'

import { auth } from './../../config'
import { options } from 'mongoose'


const API_ENDPOINT = 'https://api.skinport.com/v1/items'

export default function connect(interval) {
  updatePrices()
  setInterval(updatePrices, interval)
}

function updatePrices() {
  request({uri: API_ENDPOINT, json: true, qs: {
    app_id: 252490,
    currency: 'USD',
  }, headers: {
      'Authorization' : 'Basic ${Buffer.from(`${auth.skinport.clientId}:${auth.skinport.clientSecret}`).toString(\'base64\')}',
      'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/112.0'
    }
  }, (error, response, body) => {
    if (error) {
      console.log('Unable to get prices.');
    }

    console.log(`price updater = ${response} - ${body}`);
    for (const item in body) {
      Price.updatePrice(body[item]['market_hash_name'], body[item]['suggested_price']);
    }

    console.log("updated prices");
  });
}
