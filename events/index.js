const { EventEmitter } = require('events');

const birtdayEvenlistener = ({name}) => {
    console.log(`Happy birthday ${name}!`);
}

const myEmitter = new EventEmitter();

myEmitter.on('brithday', birtdayEvenlistener);

myEmitter.emit('brithday', {name: "Ahsan Ta'wil"});