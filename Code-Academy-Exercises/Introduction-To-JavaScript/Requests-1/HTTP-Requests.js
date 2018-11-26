console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 0);
console.log('Second message!');

/*The MDN documentation says that the reason the timeout message runs last still is that 0 is the minimum wait time,
it will always wait until the rest of the messages without a wait time run regardless of whether its wait time has finished.*/
