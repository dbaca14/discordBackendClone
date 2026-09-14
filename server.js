import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import mongoData from  './mongoData.js'
import dotenv from 'dotenv'




// app config 
const app=express()
const port = process.env.PORT || 8002

// middlewares
app.use(express.json())
app.use(cors())

//db config
dotenv.config()
const mongoURI = process.env.MONGO_URI
console.log("Postman Agent Checking URI ->", mongoURI);
mongoose.connect(mongoURI)

// api routes
app.get('/',(req,res)=>res.status(200).send('hello world'))

app.post('/new/channel',(req,res)=>{
    const dbData = req.body

    mongoData.create(dbData, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else{

            let channels = []

            data.map((channelData) => {
                const channelInfo = {
                    id: channel._id,
                    name: channel.channelName
                }
                channels.push(channelInfo)
            })
            res.status(200).send(channels)
        }
    })
})


// 1. Add the "async" keyword right before your (req, res) arrow parameters
app.get('/get/channelList', async (req, res) => {
    try {
        // 2. Add "await" before your find query to fetch data directly
        const data = await mongoData.find();
        
        // 3. If it works, send a 200 OK with the channels list back
        res.status(200).send(data);
    } catch (err) {
        // 4. If something crashes, catch it and send a 500 error status
        res.status(500).send(err);
    }
});


// listen
app.listen(port, ()=>console.log(`listening on localhost:${port}`))


