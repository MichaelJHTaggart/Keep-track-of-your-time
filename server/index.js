const express = require('express')
const timestampsCtrl = require('./controllers/timestampController')

const app = express()
const SERVER_PORT = 4000

app.use(express.json())

// Timestamp endpoints
app.get('/api/timestamps', timestampsCtrl.getTimestamps)
app.post('/api/timestamps', timestampsCtrl.addTimestamp)
app.get('/api/timestamps/:name', timestampsCtrl.getOneTimestamp)
app.put('/api/timestamps/:oldName/:newName', timestampsCtrl.editProjectName)
app.delete('/api/timestamps/:name', timestampsCtrl.deleteTimestamp)


app.listen(SERVER_PORT, () => console.log(`Hello I am listening on ${SERVER_PORT}`))