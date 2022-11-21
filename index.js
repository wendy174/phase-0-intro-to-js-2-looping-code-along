// Code your solutions in this file


function writeCards(names,eventName) {
    const message = []
    for (let i = 0; i < names.length; i++) { 
        message.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }  

return message
}

function countDown(num) {
  while (num < 0) { 
    newNum = num--
    console.log(newNum)
  }
}




  