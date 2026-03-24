import { EventEmitter } from 'node:events'
import { createAlert } from '../utils/createAlert.js'

export const buyEventEmitter = new EventEmitter()

buyEventEmitter.on('buy', (price) => {
    console.log(`Buy event received with price: ${price}`)
    createAlert('buy', price)
})