const TgBot = require('node-telegram-bot-api')
// const Mark = require('node-telegram-bot-api')

const token = '1791811515:AAGfZRb4PBrzkARUD3z1WoxWATcZm8lffO4'

const bot = new TgBot(token, { polling: true })

;(async () => {

    bot.on('message', msg => {
        const text = msg.text
        const chatId = msg.chat.id

    
        if (text) {
            // return bot.sendMessage(chatId, text)
            return bot.sendMessage(chatId, text)
        }
    })
})()

// let fast = 'foo'

// let obj = {
//     get [fast] () {return 'bar'}
// }

// console.log(obj.foo)