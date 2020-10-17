const express = require('express')
const path = require('path')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))

/*
app.get('/', (req, res) => {
  res.send(`<h1>Hello From Express</h1>`)
  // res.send({ msg: 'Hello World' })
  // res.json({ msg: 'Hello World' })
  // res.send(req.header('user-agent'))
  // res.send(req.rawHeaders)
})

// app.post('/contact', (req, res) => {
//   res.send(req.body)
//   // res.send(req.body.name)
//   // res.send(req.header('Content-Type'))
// })

// CATCHING ERROR AND SEND STATUS
app.post('/contact', (req, res) => {
  if (!req.body.name) {
    return res.status(400).send('Name is required')
  }
  res.status(201).send(`Thank You ${req.body.name}`)
})

app.post('/login', (req, res) => {
  if (!req.header('x-auth-token')) {
    return res.status(400).send('No Token')
  }
  if (req.header('x-auth-token') !== '123456') {
    return res.status(401).send('Not Authorised')
  }
  res.send('Logged in')
})

app.put('/post/:id', (req, res) => {
  res.json({
    id: req.params.id,
    title: req.body.title,
  })
})

app.delete('/post/:id', (req, res) => {
  res.json({
    msg: `Post ${req.params.id} deleted`,
  })
})
*/

app.listen(5000, () => console.log(`Server started on 5000`))
