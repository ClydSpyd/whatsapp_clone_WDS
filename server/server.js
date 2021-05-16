const io = require('socket.io')(9090, {
  cors: {
    origin: '*',
  }
})

io.on('connection', socket => {
  const id = socket.handshake.query.id
  console.log(id)
  socket.join(id)

  socket.on('send-message', ({ recipients, text }) => {
    console.log(text)
    console.log(recipients)
    recipients.forEach(recipient => {
      const newRecipients = recipients.filter(r => r !== recipient)
      newRecipients.push(id)
      console.log(recipient)
      socket.broadcast.to(recipient).emit('receive-message', {
        recipients: newRecipients, sender: id, text
      })

    })
  })
})