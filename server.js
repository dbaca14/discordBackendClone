import express from 'express'
import mongoose from 'mongoose'

// app config 
const app=express()
const port = process.env.PORT || 8002

// middlewares
app.use(express.json())

//db config
const mongoURI = 'mongodb+srv://davidbaca2003_db_user:3iJRgUaP3DnfFk1R@cluster0.8nildhm.mongodb.net/discordDB=Cluster0'
mongoose.connect(mongoURI)

// api routes
app.get('/',(req,res)=>res.status(200).send('hello world'))

// listend
app.listen(port, ()=>console.log(`listening on localhost:${port}`))


// cluster user/pass
// davidbaca2003_db_user
// 3iJRgUaP3DnfFk1R

//Admin user/pass
//mongodb+srv://davidbaca2003_db_user:<db_password>@cluster0.8nildhm.mongodb.net/?appName=Cluster0

// Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process